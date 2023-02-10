import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Settings from '../screens/Settings';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    );
}