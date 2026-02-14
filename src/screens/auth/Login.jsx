import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft } from 'lucide-react-native';

export default function Login({ navigation }) {
    const { login, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('patient');
    const [loading, setLoading] = useState(false);

    const roles = [
        { id: 'manager', label: 'Manager' },
        { id: 'caretaker', label: 'Caretaker' },
        { id: 'mentor', label: 'Customer' }, // Mapped to 'mentor' in auth context for now
        { id: 'patient', label: 'Patient' },
    ];

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            await login(role, { email, password });
            // Navigation is handled automatically by RootNavigator detecting auth state change
        } catch (error) {
            Alert.alert('Error', 'Login failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScreenWrapper className="px-6">
            <TouchableOpacity
                className="mt-4 mb-6"
                onPress={() => navigation.goBack()}
            >
                <ArrowLeft color="#4B5563" size={24} />
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</Text>
                <Text className="text-gray-500 mb-8">Sign in to access your dashboard</Text>

                <View className="mb-6">
                    <Text className="text-sm font-medium text-gray-700 mb-3">Select Role</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {roles.map((r) => (
                            <TouchableOpacity
                                key={r.id}
                                onPress={() => setRole(r.id)}
                                className={`px-4 py-2 rounded-full border ${role === r.id
                                        ? 'bg-blue-600 border-blue-600'
                                        : 'bg-white border-gray-200'
                                    }`}
                            >
                                <Text className={`font-medium ${role === r.id ? 'text-white' : 'text-gray-600'
                                    }`}>
                                    {r.label}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <Input
                    label="Email Address"
                    placeholder="name@example.com"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <Input
                    label="Password"
                    placeholder="••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <View className="flex-row justify-end mb-6">
                    <TouchableOpacity>
                        <Text className="text-blue-600 font-medium text-sm">Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <Button
                    title="Sign In"
                    onPress={handleLogin}
                    isLoading={loading}
                    size="lg"
                />
            </ScrollView>
        </ScreenWrapper>
    );
}
