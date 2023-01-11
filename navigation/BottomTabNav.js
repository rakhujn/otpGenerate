import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Authenticated from '../screens/Authenticated';
import DummyScreen from '../screens/DummyScreen';

const Tab = createBottomTabNavigator();

export default function BottomN() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Authenticated" component={Authenticated} />
            <Tab.Screen name="DummyScreen" component={DummyScreen} />
        </Tab.Navigator>
    );
}