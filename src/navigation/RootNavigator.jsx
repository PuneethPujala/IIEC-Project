import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

import AuthNavigator from './AuthNavigator';
import ManagerNavigator from './ManagerNavigator';
import CaretakerNavigator from './CaretakerNavigator';
import CustomerNavigator from './CustomerNavigator';
import PatientNavigator from './PatientNavigator';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const { isAuthenticated, selectedRole, isLoading } = useAuth();

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isAuthenticated ? (
                <Stack.Screen name="Auth" component={AuthNavigator} />
            ) : (
                <>
                    {selectedRole === 'manager' && <Stack.Screen name="ManagerApp" component={ManagerNavigator} />}
                    {selectedRole === 'caretaker' && <Stack.Screen name="CaretakerApp" component={CaretakerNavigator} />}
                    {selectedRole === 'mentor' && <Stack.Screen name="CustomerApp" component={CustomerNavigator} />}
                    {selectedRole === 'patient' && <Stack.Screen name="PatientApp" component={PatientNavigator} />}
                </>
            )}
        </Stack.Navigator>
    );
}
