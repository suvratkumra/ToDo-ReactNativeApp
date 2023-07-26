import React from 'react';
import { View, Button, StyleSheet, A, TouchableOpacity, Linking, Text } from 'react-native';

const HelpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
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
    }
});

export default HelpScreen;
