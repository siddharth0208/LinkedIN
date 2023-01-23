// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from './DrawerNavigation/DrawerNavigation';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={DrawerNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
