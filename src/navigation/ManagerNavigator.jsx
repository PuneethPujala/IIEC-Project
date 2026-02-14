import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Users, UserCheck, Bell } from 'lucide-react-native';
import Dashboard from '../screens/manager/Dashboard';
import Patients from '../screens/manager/Patients';
import Caretakers from '../screens/manager/Caretakers';
import Alerts from '../screens/manager/Alerts';

const Tab = createBottomTabNavigator();

export default function ManagerNavigator() {
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
                name="Patients"
                component={Patients}
                options={{
                    tabBarIcon: ({ color }) => <Users size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Caretakers"
                component={Caretakers}
                options={{
                    tabBarIcon: ({ color }) => <UserCheck size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Alerts"
                component={Alerts}
                options={{
                    tabBarIcon: ({ color }) => <Bell size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
