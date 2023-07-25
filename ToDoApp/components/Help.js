import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HelpScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Button title="Go to Other Screen" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HelpScreen;
