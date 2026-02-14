import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { Heart, Activity, Pill, MessageSquare } from 'lucide-react-native';

export default function Dashboard({ navigation }) {
    return (
        <ScreenWrapper>
            <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
                <View className="flex-row justify-between items-center mb-6">
                    <View>
                        <Text className="text-2xl font-bold text-gray-900">Good Morning</Text>
                        <Text className="text-gray-500">How are you feeling today?</Text>
                    </View>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
                        className="w-12 h-12 rounded-full bg-gray-200"
                    />
                </View>

                <View className="flex-row gap-4 mb-6">
                    <Card className="flex-1 bg-blue-600 border-blue-600">
                        <Heart size={24} color="white" fill="white" />
                        <Text className="text-white font-bold text-lg mt-2">72 bpm</Text>
                        <Text className="text-blue-100 text-xs">Heart Rate</Text>
                    </Card>
                    <Card className="flex-1 bg-white">
                        <Activity size={24} color="#EF4444" />
                        <Text className="text-gray-900 font-bold text-lg mt-2">120/80</Text>
                        <Text className="text-gray-500 text-xs">Blood Pressure</Text>
                    </Card>
                </View>

                <Text className="text-lg font-bold text-gray-900 mb-3">Next Medication</Text>
                <Card className="mb-6 flex-row items-center">
                    <View className="bg-blue-100 p-3 rounded-full mr-4">
                        <Pill size={24} color="#2563EB" />
                    </View>
                    <View className="flex-1">
                        <Text className="font-bold text-gray-900">Metformin</Text>
                        <Text className="text-gray-500 text-xs">500mg • Take with food</Text>
                    </View>
                    <View className="items-end">
                        <Text className="font-bold text-gray-900">2:00 PM</Text>
                        <Text className="text-gray-500 text-xs text-right">Today</Text>
                    </View>
                </Card>

                <Text className="text-lg font-bold text-gray-900 mb-3">Quick Actions</Text>
                <View className="gap-3">
                    <Button
                        title="Log Vitals"
                        variant="outline"
                        onPress={() => { }}
                        icon={<Activity size={20} color="#374151" />}
                    />
                    <Button
                        title="Message Caretaker"
                        variant="primary"
                        onPress={() => navigation.navigate('Messages')}
                        icon={<MessageSquare size={20} color="white" />}
                    />
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
