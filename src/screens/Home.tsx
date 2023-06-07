import React, { useState } from 'react';
import { Button, Platform, Text, View } from 'react-native';
import { openInbox } from 'react-native-email-link';
import AndroidOpenSettings from 'react-native-android-open-settings';
import { useMainContext } from '../providers/MainProviders';

export const HomeScreen = () => {
  const [info, setInfo] = useState<
    'ios' | 'android' | 'windows' | 'macos' | 'web' | null
  >();
  const { setIsChangePosition } = useMainContext();

  const infoFunc = () => {
    setInfo(Platform.OS);
    setTimeout(() => {
      setInfo(null);
    }, 3000);
  };

  const changeContentPosition = () => {
    setIsChangePosition((prev) => !prev);
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View style={{ height: 44, paddingTop: 12 }}>
        {info && (
          <Text style={{ textAlign: 'center' }}>Your platform {info}</Text>
        )}
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Button title={'Open email'} onPress={() => openInbox()} />
        <Button
          title={'Open settings'}
          onPress={() => AndroidOpenSettings.generalSettings()}
        />
        <Button title={'Open info'} onPress={infoFunc} />

        <Button
          title={'Change content position'}
          onPress={changeContentPosition}
        />
      </View>
    </View>
  );
};
