import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen5 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'gray' }}>
      <Text>SettingsScreen5</Text>
      <Button title={'goBack'} onPress={() => navigation.goBack()} />
    </View>
  );
};
