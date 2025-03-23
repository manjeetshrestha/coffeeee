/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CoffeeApp} from './src/CoffeeApp';

export function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CoffeeApp />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
