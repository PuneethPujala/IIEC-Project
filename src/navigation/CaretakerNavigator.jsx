import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Users, History } from 'lucide-react-native';
import HomeScreen from '../screens/caretaker/Home';
import Patients from '../screens/caretaker/Patients';
import History from '../screens/caretaker/History';

const Tab = createBottomTabNavigator();

export default function CaretakerNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
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
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ color }) => <History size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
