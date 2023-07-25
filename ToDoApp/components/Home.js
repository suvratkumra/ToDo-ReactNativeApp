import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {

    function goToPageHandler(name) {
        navigation.navigate(name)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Home Screen</Text>
            </View>
            <View>
                <Button title="Help" onPress={() => goToPageHandler("Help")} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default HomeScreen;