import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/Login/Login';
import HomeScreen from './Screens/Home/HomeScreen';
import SettingsScreen from './Screens/Settings/SettingsScreen';
import { ScreenProps } from './Utils/types';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs({ route }: ScreenProps) {
  const { name, post } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MainTab"
        children={() => <HomeScreen name={name} post={post} />}
      />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs">
          {({ route }) => <MainTabs route={route} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
