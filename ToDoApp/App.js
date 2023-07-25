import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Help from './components/Help';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button style={styles.button} title="Help" />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#000000"
  }
});
