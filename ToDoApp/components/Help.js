import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HelpScreen = ({ navigation }) => {
    const handleButtonClick = () => {
        navigation.navigate('Other'); // This will navigate to the "Other" screen
    };

    return (
        <View style={styles.container}>
            <Button title="Go to Other Screen" onPress={handleButtonClick} />
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
