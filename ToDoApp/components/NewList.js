import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default function NewListScreen() {
    const [listField, setListField] = useState([]);
    const [importantIndex, setImportantIndex] = useState([]);

    const handleAddingTextToItem = (text, index) => {
        // Create a copy of the listField array
        const updatedList = [...listField];

        // Update the value at the specified index in the copied array
        updatedList[index] = text;

        // Set the state with the updated array
        setListField(updatedList);
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


    return (
        <ScrollView style={styles.scrollContainer}>
            <TouchableOpacity style={styles.addItemButton} onPress={() => setListField([...listField, ""])}>
                <View>
                    <Text style={styles.addItemButtonText}> + </Text>
                </View>
            </TouchableOpacity>
            {listField.map((value, index) => {
                const displayIndex = index + 1;
                const isImportant = importantIndex.includes(index);
                return (
                    <View key={index} style={styles.textContainer}>
                        <Text>{displayIndex}</Text>
                        <TouchableOpacity onPress={() => { handleRemovingInputField(index); }}>
                            <View>
                                <FontAwesome name="remove" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                        <View style={[styles.textInputContainer, isImportant && styles.importantInputContainer]}>
                            <TextInput
                                style={[styles.inputText, isImportant && styles.inputTextImportant]}
                                placeholder="Enter text here"
                                placeholderTextColor="#666666"
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

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#ffffff',
        color: '#333333'
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