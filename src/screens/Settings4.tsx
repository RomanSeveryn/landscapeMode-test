import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const SettingsScreen4 = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'orange' }}>
      <Text>SettingsScreen4</Text>
      <Button
        title={'go to SettingsScreen5'}
        onPress={() => navigation.navigate('SettingsScreen5')}
      />
    </View>
  );
};
