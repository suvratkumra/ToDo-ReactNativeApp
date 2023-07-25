import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


function Footer() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
                <Text style={styles.optionText}>Help</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333333',
        paddingBottom: 40,
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    option: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    optionText: {
        fontFamily: 'Inter_900Black',
        color: 'white',
        fontSize: 20,
    },
});

export default Footer;
