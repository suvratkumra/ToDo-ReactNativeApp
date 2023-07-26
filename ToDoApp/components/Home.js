import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

function HomeScreen({ navigation }) {

    function goToPageHandler(name) {
        navigation.navigate(name)
    }

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => { }}>
                    <View style={styles.linkContainer}>
                        <Text style={styles.link}>
                            Hire me!
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Home Screen</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default HomeScreen;