import React from 'react';
import { View, Text, Image } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Button from '../../components/common/Button';
import { Heart } from 'lucide-react-native';

export default function Landing({ navigation }) {
    return (
        <ScreenWrapper className="justify-center items-center px-6">
            <View className="items-center mb-12">
                <View className="bg-blue-100 p-6 rounded-full mb-6">
                    <Heart size={64} color="#2563EB" fill="#2563EB" />
                </View>
                <Text className="text-4xl font-bold text-gray-900 text-center mb-2">CareConnect</Text>
                <Text className="text-lg text-gray-500 text-center">
                    Healthcare management simplified for everyone.
                </Text>
            </View>

            <View className="w-full space-y-4">
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    size="lg"
                />
                <Button
                    title="Sign Up as Caretaker"
                    variant="outline"
                    onPress={() => { }} // Placeholder
                    size="lg"
                />
            </View>

            <Text className="absolute bottom-10 text-gray-400 text-sm">
                © 2024 CareConnect Platform
            </Text>
        </ScreenWrapper>
    );
}
