import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/home';
import PastInfoScreen from './screens/past_info';
import AlreadyDecisionsScreen from './screens/already_decisions';
import NewDecisionScreen from './screens/new_decisions';
import MethodsScreen from './screens/methods';
import ResultScreen from './screens/result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Entscheidungshelfer' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
        />
        <Stack.Screen 
          name="Vergangene Entscheidung" 
          component={PastInfoScreen} 
        />
        <Stack.Screen 
          name="Du triffst bereits Entscheidungen" 
          component={AlreadyDecisionsScreen} 
        />
        <Stack.Screen 
          name="Neue Entscheidung" 
          component={NewDecisionScreen} 
        />
        <Stack.Screen 
          name="Methode" 
          component={MethodsScreen} 
        />
        <Stack.Screen 
          name="Ergebnis" 
          component={ResultScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};