import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

import { db } from "../config/firebaseConnect";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import * as SecureStore from 'expo-secure-store'
import { useNavigation } from '@react-navigation/native';


export default function NewListScreen({ route }) {
    const navigation = useNavigation();
    const [listField, setListField] = useState([""]);
    const [importantIndex, setImportantIndex] = useState([]);
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [openCalendar, setOpenCalendar] = useState(false);
    const [listName, setListName] = useState("");
    const [listNameFocused, setListNameFocused] = useState(false);
    const params = route.params;

    // Function to save the list data to the backend
    const saveListToBackend = async () => {
        // get the device id
        const getDeviceId = async () => {
            const id = await SecureStore.getItemAsync('deviceid');
            return id;
        }
        const deviceId = await getDeviceId();
        console.log(listField, importantIndex)
        const allTasks = listField.map((value, index) => {
            if (value === "") {
                return ({
                    task: "",
                    isImportant: importantIndex.includes(index)
                })
            }
            else {
                return ({
                    task: value,
                    isImportant: importantIndex.includes(index)
                })
            }
        })
        console.log('====================================');
        console.log("All", allTasks);
        console.log('====================================');
        const dbConfiguredList = {
            deviceID: deviceId,
            lists: [{
                ListName: listName,
                Date: date,
                List: allTasks
            }]
        }

        const createOrUpdateDocument = async () => {
            try {
                // Create a reference to the specific document using the doc function
                const documentRef = doc(db, "ToDoTasks", params?.documentId);

                // Check if the document exists by fetching it
                const documentSnapshot = await getDoc(documentRef);


                console.log("dbconfigure ", dbConfiguredList)
                // If the document exists, update it with the new data
                if (documentSnapshot.exists()) {
                    await updateDoc(documentRef, dbConfiguredList);
                    console.log("Document updated successfully!");
                } else {
                    // If the document does not exist, create a new one with the given data
                    await setDoc(documentRef, newData);
                    console.log("Document created successfully!");
                }
            } catch (e) {
                console.error("Error creating/updating document: ", e);
            }
        };

        createOrUpdateDocument();

        console.log("List data saved to backend.");
    }

    useEffect(() => {
        const onSaveListToBackend = async () => {
            await saveListToBackend();
        };

        // Add a listener to the "beforeRemove" event
        navigation.addListener("beforeRemove", onSaveListToBackend);

        // Cleanup function to remove the listener when the component is unmounted
        return () => {
            navigation.removeListener("beforeRemove", onSaveListToBackend);
        };


    }, [navigation, listField, importantIndex, listName]);

    useEffect(() => { }, [listField])

    // if redirected by the existing list.
    useEffect(() => {

        console.log(params?.redirectFromExistingList, params?.documentId, params?.listData);

        if (params?.redirectFromExistingList === 1) {
            setDate(params?.listData?.Date);

            var importantIndices = [];
            const existingListTasks = params?.listData?.List?.map((value, index) => {
                if (value.isImportant)
                    importantIndex.push(index)
                return value?.task;
            })

            setListField(existingListTasks)
            setListName(params?.listData.ListName)
        }
    }, [])

    const handleAddingTextToItem = (text, index) => {
        // Create a copy of the listField array
        const updatedList = [...listField];

        // Update the value at the specified index in the copied array
        updatedList[index] = text;

        // Set the state with the updated array
        setListField(updatedList);
        console.log(listField)
    };

    const handleRemovingImportant = (indexToRemove) => {
        const newImportantList = importantIndex.filter((value) => value !== indexToRemove);
        setImportantIndex(newImportantList);
    };

    const handleRemovingInputField = (indexToRemove) => {
        // Create a new array with the elements excluding the one at the specified index
        const updatedList = listField.filter((_, index) => index !== indexToRemove);
        setListField(updatedList);

        // Remove the index from importantIndex and decrement the values greater than indexToRemove
        const updatedImpList = importantIndex.filter((value) => value !== indexToRemove).map((value) => value > indexToRemove ? value - 1 : value);
        setImportantIndex(updatedImpList);
    };

    const handleCalendarView = () => {
        setOpenCalendar(!openCalendar);
    }


    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={[styles.textInputContainer, { borderWidth: 1, borderColor: 'gray' }]}>
                <TextInput
                    placeholder="List Name"
                    style={listNameFocused ? styles.setListOnFocus : styles.setListOnBlur}
                    placeholderTextColor={"#666666"}
                    value={listName}
                    onChangeText={(value) => setListName(value)}
                    onFocus={() => setListNameFocused(true)}
                    onBlur={() => setListNameFocused(false)} />
            </View>
            <View>
                <TouchableOpacity onPress={handleCalendarView} style={calendarStyles.calendarToggleButton}>
                    <Text style={calendarStyles.calendarToggleText}>
                        {date}
                    </Text>
                </TouchableOpacity>
                {openCalendar &&
                    (
                        <View style={calendarStyles.calendarContainer}>
                            <Calendar
                                onDayPress={day => setDate(day.dateString)}     // if the date is pressed, update the date.
                                markedDates={{
                                    [date]: { selected: true, marked: true, selectedColor: '#FF6B6B' }
                                }}
                            />
                            {/* <TouchableOpacity style={calendarStyles.closeCalendarContainer} onPress={() => setOpenCalendar(false)}>
                                <Text>
                                    Close Calendar
                                </Text>
                            </TouchableOpacity> */}
                        </View>
                    )
                }
            </View>
            <TouchableOpacity style={styles.addItemButton} onPress={() => setListField([...listField, ""])}>
                <View>
                    <Text style={styles.addItemButtonText}> + </Text>
                </View>
            </TouchableOpacity>
            {listField.map((value, index) => {
                const isImportant = importantIndex.includes(index);
                return (
                    <View key={index} style={styles.textContainer}>
                        <TouchableOpacity onPress={() => { handleRemovingInputField(index); }}>
                            <View>
                                <FontAwesome name="remove" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.textInputContainer, isImportant && styles.importantInputContainer]}>
                            <TextInput
                                style={[styles.inputText, isImportant && styles.inputTextImportant]}
                                placeholder="Enter text here"
                                placeholderTextColor={isImportant ? "#FFFFF0" : "#666666"}
                                value={value} // Bind the value of TextInput to the corresponding element in the listField array
                                onChangeText={(text) => handleAddingTextToItem(text, index)}
                            />
                        </View>
                        <TouchableOpacity style={!isImportant && styles.exclaimTouchableButton} onPress={() => setImportantIndex([...importantIndex, index])}>
                            <View >
                                <AntDesign name="exclamation" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={isImportant && styles.exclaimTouchableButton} onPress={() => handleRemovingImportant(index)}>
                            <View >
                                <AntDesign name="minuscircle" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
}

const calendarStyles = StyleSheet.create({
    calendarToggleButton: {
        borderColor: '#D34C4C',
        borderWidth: 1,
        alignSelf: "center",
        borderRadius: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        backgroundColor: '#FF7F7F'
    },
    calendarToggleText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700'
    },
    calendarContainer: {
        flex: 1,
        marginBottom: 20, // Add margin at the bottom to create space for the closeCalendarContainer
    },
    closeCalendarContainer: {
        alignSelf: 'flex-end', // Align the container to the right side of the parent View
        borderWidth: 2,
        padding: 10,
    },
});

const styles = StyleSheet.create({
    setListOnFocus: {
        fontSize: 30
    },
    setListOnBlur: {

    },
    scrollContainer: {
        backgroundColor: '#ffffff',
        color: '#333333',
        flex: 1
    },
    addItemButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 30,
        marginHorizontal: 30,
        alignItems: "center",
        borderWidth: 2,
        borderColor: '#00B359',
        backgroundColor: '#00CC66',
        borderRadius: '20%'
    },
    addItemButtonText: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'nowrap',
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 10
    },
    textInputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        borderWidth: 2,
        borderColor: '#FF6B6B',
        color: '#333333',
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 7,
        flex: 8
    },
    importantInputContainer: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    inputText: {
        color: '#333333'
    },
    inputTextImportant: {
        color: 'white'
    },
    exclaimTouchableButton: {
        borderRadius: '100%',
        borderWidth: 2,
        borderColor: '#ff1000',
        backgroundColor: 'red'
    }
})