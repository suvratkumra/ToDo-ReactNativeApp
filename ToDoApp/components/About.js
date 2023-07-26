import React from 'react';
import { View, Button, StyleSheet, A, TouchableOpacity, Linking, Text } from 'react-native';

const AboutScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                This App is made using React Native.
            </Text>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.fiverr.com/suvratkumra/create-advanced-mern-stack-website-with-advanced-linraries') }}>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>
                        Hire me!
                    </Text>
                </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 10, color: '#333333' }}>(The rates are negotiable too!)</Text>
            <TouchableOpacity onPress={() => { Linking.openURL('https://www.linkedin.com/in/suvrat-kumra-420017193/') }}>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>
                        Find me on LinkedIn
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { Linking.openURL('https://github.com/suvratkumra/ToDo-ReactNativeApp') }}>
                <View style={styles.linkContainer}>
                    <Text style={styles.link}>
                        Source Code
                    </Text>
                </View>
                <Text>
                    The entire source code can be found here
                </Text>
            </TouchableOpacity>
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

export default AboutScreen;
