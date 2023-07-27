import { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen({ navigation }) {

    // extract them from the local storage.
    const [existingLists, setExistingLists] = useState([]);


    function goToPageHandler(name) {
        navigation.navigate(name)
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

                {/* TODO: Make this conditional */}
                <View style={styles.noListToShowContainer}>
                    <Text style={styles.noListText}> No Lists to Show! </Text>
                </View>
            </View>

        </View>

    );
}

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