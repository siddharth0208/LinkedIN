import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MyTab from '../TabNavigation/TabNavigation';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Dash">
      <Drawer.Screen name="Dash" component={MyTab} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
