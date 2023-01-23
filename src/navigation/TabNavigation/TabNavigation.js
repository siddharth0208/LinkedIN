import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashbord from '../../screens/Dashbord';
import MyNetwork from '../../screens/Mynetwork/index';
import Post from '../../screens/Post/index';
import Notification from '../../screens/Notifications/index';
import Jobs from '../../screens/Jobs/index';
const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Dashbord} />
      <Tab.Screen name="MyNetwork" component={MyNetwork} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Jobs" component={Jobs} />
    </Tab.Navigator>
  );
}
export default MyTab;
