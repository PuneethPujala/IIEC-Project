import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../screens/auth/Landing';
import Login from '../screens/auth/Login';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
