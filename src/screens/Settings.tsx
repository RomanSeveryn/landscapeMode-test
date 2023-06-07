import React from 'react';
import { View } from 'react-native';
import { useMainContext } from '../providers/MainProviders';
import { SettingsScreen2 } from './Settings2';
import { SettingsScreen3 } from './Settings3';

const components = [
  {
    component: <SettingsScreen2 />,
    position: 1,
  },
  {
    position: 2,
    component: <SettingsScreen3 />,
  },
];

export const SettingsScreen = () => {
  const { isChangePosition } = useMainContext();

  const sortFunc = (a, b) => {
    return !isChangePosition
      ? a.position - b.position
      : b.position - a.position;
  };

  const newArr = components.sort(sortFunc);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      {newArr.map((elem) => {
        return (
          <View key={elem.position} style={{ flex: 1 }}>
            {elem.component}
          </View>
        );
      })}
    </View>
  );
};
