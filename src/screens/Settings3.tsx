import React from 'react';
import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
  return (
    <PagerView style={{ flex: 1 }} initialPage={0}>
      <View key='1' style={{ backgroundColor: 'lightblue' }}>
        <Text>First page</Text>
      </View>
      <View key='2' style={{ backgroundColor: 'pink' }}>
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

export const SettingsScreen3 = () => {
  return (
    <View style={{ flex: 1 }}>
      <MyPager />
    </View>
  );
};
