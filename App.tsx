import 'react-native-get-random-values';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TodoProvider } from './src/contexts/TodoContext';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TodoProvider>
  );
}
