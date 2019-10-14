import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FunctionalComponent from './src/Screens/FunctionalComponent';
import ClassComponent from './src/Screens/ClassComponent';
import ThirdComponent from './src/Screens/ThirdComponent';

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Provider} from './src/context/Context';


const AppNavigator = createBottomTabNavigator(
  {
    functional: FunctionalComponent,
    class: ClassComponent,
    component: ThirdComponent
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <Provider>
        <App />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
