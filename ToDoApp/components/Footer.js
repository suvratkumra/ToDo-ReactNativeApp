import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Font Awesome icons from the library
import { useNavigation } from '@react-navigation/native';


function Footer() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Home') }}>
                <Ionicons name="home" size={24} color="white" />
                <Text style={styles.optionText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Search') }}>
                <Ionicons name="search" size={24} color="white" />
                <Text style={styles.optionText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Settings') }}>
                <Ionicons name="settings" size={24} color="white" />
                <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={() => { navigation.navigate('Help') }}>
                <Ionicons name="help" size={24} color="white" />
                <Text style={styles.optionText}>Help</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        backgroundColor: '#333333',
        paddingBottom: 30,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    optionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    option: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
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
