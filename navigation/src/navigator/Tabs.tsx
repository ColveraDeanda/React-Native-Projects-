import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export function Tabs() {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colores.primary,
                tabBarStyle: {
                    borderTopColor: colores.secondary, // Esta opción solo aparece si no tiene las props de abajo.
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 20
                },
                // eslint-disable-next-line react/no-unstable-nested-components
                tabBarIcon({ color, focused, size }) {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'T3';
                            break;

                    }
                    return <Text style={{color}}>{iconName}</Text>
                },
            })}

        >
            <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <Tab.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={Tab2Screen} />
            <Tab.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </Tab.Navigator>
    );
}

