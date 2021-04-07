import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Contacts, Locals, Recents } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => <></> }} initialRouteName="keyboard">
        <Stack.Screen name="contacts" component={Contacts} />
        <Stack.Screen name="keyboard" component={Keyboard} />
        <Stack.Screen name="locals" component={Locals} />
        <Stack.Screen name="recents" component={Recents} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


