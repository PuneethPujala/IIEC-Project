import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Heart, Activity, Phone } from 'lucide-react-native';

export default function Dashboard({ navigation }) {
    return (
        <ScreenWrapper>
            <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
                <View className="flex-row justify-between items-center mb-6">
                    <View>
                        <Text className="text-2xl font-bold text-gray-900">Hello, John</Text>
                        <Text className="text-gray-500">Stay healthy!</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
                        className="w-12 h-12 rounded-full bg-gray-200"
                    />
                </View>

                <View className="mb-6">
                    <Card className="bg-blue-600 border-blue-600">
                        <View className="flex-row items-center mb-4">
                            <View className="bg-white/20 p-2 rounded-full">
                                <Phone size={24} color="white" />
                            </View>
                            <Text className="text-white font-bold text-lg ml-3">Next Call</Text>
                        </View>
                        <Text className="text-white text-3xl font-bold mb-1">10:00 AM</Text>
                        <Text className="text-blue-100">With Caretaker Sarah</Text>
                        <Button
                            title="Join Call"
                            className="mt-4 bg-white"
                            // textStyle="text-blue-600" // Button component styling override needed or use variant
                            variant="secondary"
                            onPress={() => { }}
                        />
                    </Card>
                </View>

                <Text className="text-lg font-bold text-gray-900 mb-3">Your Vitals</Text>
                <View className="flex-row gap-4">
                    <Card className="flex-1 bg-white">
                        <Heart size={24} color="#EF4444" fill="#EF4444" />
                        <Text className="text-gray-900 font-bold text-lg mt-2">72 bpm</Text>
                        <Text className="text-gray-500 text-xs">Heart Rate</Text>
                    </Card>
                    <Card className="flex-1 bg-white">
                        <Activity size={24} color="#3B82F6" />
                        <Text className="text-gray-900 font-bold text-lg mt-2">118/78</Text>
                        <Text className="text-gray-500 text-xs">Blood Pressure</Text>
                    </Card>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
