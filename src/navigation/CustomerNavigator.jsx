import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Pill, MessageSquare } from 'lucide-react-native';
import Dashboard from '../screens/customer/Dashboard';
import Medications from '../screens/customer/Medications';
import Messages from '../screens/customer/Messages';

const Tab = createBottomTabNavigator();

export default function CustomerNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color }) => <Home size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Medications"
                component={Medications}
                options={{
                    tabBarIcon: ({ color }) => <Pill size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: ({ color }) => <MessageSquare size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
