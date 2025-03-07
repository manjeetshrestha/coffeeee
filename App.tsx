/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {CoffeeApp} from './src/CoffeeApp';

export function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <CoffeeApp />
    </SafeAreaProvider>
  );
}
