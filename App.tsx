import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MainProvider } from './src/providers/MainProviders';
import { MyTabs } from './src/navigators/TabNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </MainProvider>
    </SafeAreaView>
  );
}

export default App;
