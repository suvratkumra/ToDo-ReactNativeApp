import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpScreen from './components/Help';
import HomeScreen from './components/Home';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: null }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ headerTitle: null }} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;