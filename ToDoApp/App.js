import * as React from 'react';
import { View, Text, StyleSheet, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpScreen from './components/Help';
import HomeScreen from './components/Home';
import Footer from './components/Footer';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import SettingsScreen from './components/Settings';
import CalendarScreen from './components/Calendar';
import CustomHeader from './components/Header';
import AboutScreen from './components/About';
import NewListScreen from './components/NewList';
import InfoContextProvider from './context/InformationContext';

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <InfoContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              header: ({ navigation }) => (
                <CustomHeader title="Home" onBackPress={() => navigation.goBack()} />
              ),
            }}
          />
          <Stack.Screen name="Help" component={HelpScreen} options={{
            header: ({ navigation }) => (
              <CustomHeader title="Help" onBackPress={() => navigation.goBack()} />
            ),
          }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{
            header: ({ navigation }) => (
              <CustomHeader title="Settings" onBackPress={() => navigation.goBack()} />
            ),
          }} />
          <Stack.Screen name="Calendar" component={CalendarScreen} options={{
            header: ({ navigation }) => (
              <CustomHeader title="Calendar" onBackPress={() => navigation.goBack()} />
            ),
          }} />
          <Stack.Screen name="About" component={AboutScreen} options={{
            header: ({ navigation }) => (
              <CustomHeader title="About" onBackPress={() => navigation.goBack()} />
            ),
          }} />
          <Stack.Screen name="NewList" component={NewListScreen} options={{
            header: ({ navigation }) => (
              <CustomHeader title="New List Creation" onBackPress={() => navigation.goBack()} />
            ),
          }} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </InfoContextProvider>
  );
}

export default App;