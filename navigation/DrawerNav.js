import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Authenticated from '../screens/Authenticated';
import BottomN from './BottomTabNav';


const Drawer = createDrawerNavigator();

export default function DrawerN() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={BottomN} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}