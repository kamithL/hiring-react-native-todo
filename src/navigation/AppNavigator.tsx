
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
  <Stack.Navigator id={undefined} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
