import { View, Text, StyleSheet, Button } from "react-native";

function SettingsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>Home Screen</Text>
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

export default SettingsScreen;