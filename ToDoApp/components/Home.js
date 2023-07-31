import { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";

// all these imports for unique id for the device.
import * as SecureStore from 'expo-secure-store'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// to get the firebase implementation
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConnect";


function HomeScreen({ navigation }) {
    // extract them from the local storage.
    const [existingLists, setExistingLists] = useState([]);
    const [deviceid, setDeviceid] = useState("");
    const [tempCount, setTempCount] = useState(1);


    // calling this function to assign a unique id to the phone.
    const deviceUUID = async () => {
        let uuid = uuidv4();
        let fetchUUID = await SecureStore.getItemAsync('deviceid');
        //if user has already signed up prior
        if (fetchUUID) {
            uuid = fetchUUID
        }
        else {
            await SecureStore.setItemAsync('deviceid', JSON.stringify(uuid));
        }
        setDeviceid(uuid);
    }
    const deletePreviousUUID = async () => {
        await SecureStore.deleteItemAsync('deviceid');
    }

    useEffect(() => {
        deviceUUID();
    }, [])

    useEffect(() => {
        getAllLists();
    }, [deviceid])

    const getAllLists = async () => {
        const tasksCollection = collection(db, "ToDoTasks");

        if (tasksCollection) {
            const q = query(tasksCollection, where("deviceID", '==', deviceid));
            try {
                const querySnapshot = await getDocs(q);
                const lists = querySnapshot.docs.map(doc => {
                    return {
                        documentId: doc.id,
                        data: doc.data().lists[0]
                    }
                });
                setExistingLists(lists);
                // console.log("Items with device ID:", lists);
            }
            catch (e) {
                Alert.alert(e);
            }
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.newListContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate('NewList') }}>
                    <View style={styles.linkContainer}>
                        <Text style={styles.link}>
                            Create
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.existingListContainer}>
                {/* TODO: Make the list pop up as per the upcoming date. */}
                <Text>Upcoming Lists</Text>

                {
                    existingLists.length > 0 ? (
                        <View style={existingListStyle.existingListContainer}>
                            {/* map the current data in existing list  */}
                            {existingLists.map((value, index) => {
                                console.log(value.data);
                                return (
                                    <TouchableOpacity key={index} style={existingListStyle.itemContainer} onPress={() => { navigation.navigate('NewList', { documentId: value.documentId, redirectFromExistingList: 1, listData: value.data }) }}>
                                        <View style={existingListStyle.itemHeaderContainer}>
                                            <Text style={existingListStyle.itemTitle}>
                                                {value.data.ListName === "" ? (
                                                    <Text style={existingListStyle.tempTitle}>
                                                        List
                                                    </Text>) : value.data.ListName}
                                            </Text>
                                            <Text style={existingListStyle.itemDate}>
                                                {value.data.Date}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    ) : (
                        <View style={styles.noListToShowContainer}>
                            <Text style={styles.noListText}> No Lists to Show! </Text>
                        </View>
                    )
                }

            </View>

        </View>

    );
}

const existingListStyle = StyleSheet.create({
    existingListContainer: {

    },
    itemContainer: {
        borderColor: '#DDDDDD',
        borderWidth: 2,
        backgroundColor: '#f0f0f0',
        marginVertical: 20,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: '20%'
    },
    itemHeaderContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    itemText: {

    },
    itemTitle: {
        color: '#333333',
        fontSize: 26,
        fontWeight: "bold"
    },
    tempTitle: {
        color: '#aaaaaa'
    },
    itemDate: {
        fontSize: 20,
    },

})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative', // Add this for positioning
    },
    helpContainer: {
        position: 'absolute', // Position the helpContainer absolutely
        bottom: 20, // Adjust the top position as needed
        right: 20, // Adjust the right position as needed
    },
    link: {
        fontSize: 32,
        color: '#ffffff'
    },
    linkContainer: {
        padding: 20,
        marginBottom: 0,
        marginHorizontal: 20,
        marginTop: 20,
        borderColor: '#E65151',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#FF6B6B'
    },
    existingListContainer: {
        borderColor: '#333333',
        borderTopWidth: 2,
        padding: 20,
        margin: 20,
        width: '100%'
    },
    existingListItem: {
        backgroundColor: '#F3F3F3',
        borderRadius: '20%',
        width: '90%',
        alignSelf: "center",
        padding: 30,
        margin: 20
    },
    noListToShowContainer: {
        backgroundColor: '#f3f3f3',
        padding: '10%',
        margin: '10%',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#f4f4f4',
        borderWidth: 1,
        borderRadius: '20%',

    },
    noListText: {
        color: '#333333',
        fontSize: 20,
    }
});

export default HomeScreen;