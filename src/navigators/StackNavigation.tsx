import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen4 } from '../screens/Settings4';
import { SettingsScreen5 } from '../screens/Settings5';

export const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='SettingsScreen4' component={SettingsScreen4} />
      <Stack.Screen name='SettingsScreen5' component={SettingsScreen5} />
    </Stack.Navigator>
  );
};
