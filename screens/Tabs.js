import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Modules from './Modules';
import Module from './Module';
import Profile from './Profile';
import Home from './Home';

import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function Tabs() {
    return (
            <BottomTab.Navigator screenOptions={{
        activeTintColor: '#0039bc',
    }}>
    
        <BottomTab.Screen
         name="Home" 
         component={Home} 
            options={{
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName = focused ? 'ios-home' : 'ios-home-outline';
                    return <Ionicons name={iconName} color={color} size={size} />
                },
            }}
         />
        <BottomTab.Screen 
        name="Modules" 
        component={Modules}
        options={{
            tabBarIcon: ({ focused, color, size}) => {
                let iconName = focused ? 'ios-book' : 'ios-book-outline';
                return <Ionicons name={iconName} color={color} size={size} />
            },
        }}

         />
        <BottomTab.Screen 
        name="Profile" 
        component={Profile}
         
        options={{
            tabBarIcon: ({ focused, color, size}) => {
                let iconName = focused ? 'ios-person' : 'ios-person-outline';

                return <Ionicons name={iconName} color={color} size={size} />
            },
        }}
         />

    </BottomTab.Navigator>
    );
}


