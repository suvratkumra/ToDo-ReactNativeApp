import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import { Calendar } from 'react-native-calendars';

function CalendarScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View>
                <Calendar />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'relative', // Add this for positioning
    },
    helpContainer: {
        position: 'absolute', // Position the helpContainer absolutely
        bottom: 20, // Adjust the top position as needed
        right: 20, // Adjust the right position as needed
    }
});

export default CalendarScreen;