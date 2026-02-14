import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import { Clock, Phone } from 'lucide-react-native';
import { mockCalls } from '../../mockData/calls';

export default function Home({ navigation }) {
    const upcomingCalls = mockCalls.filter(c => c.status === 'pending');

    const renderItem = ({ item }) => (
        <Card className="mb-3 border-l-4 border-l-blue-500">
            <View className="flex-row justify-between items-start mb-2">
                <Text className="font-bold text-gray-900">{item.patientName}</Text>
                <View className="bg-blue-100 px-2 py-1 rounded-full">
                    <Text className="text-xs text-blue-700 font-medium">{item.scheduledTime}</Text>
                </View>
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <View className="flex-row items-center">
                    <Clock size={14} color="#6B7280" />
                    <Text className="text-xs text-gray-500 ml-1">{item.duration || 'Scheduled'}</Text>
                </View>
                <TouchableOpacity className="bg-blue-600 px-3 py-1.5 rounded-lg flex-row items-center">
                    <Phone size={12} color="white" />
                    <Text className="text-white text-xs font-bold ml-1">Call</Text>
                </TouchableOpacity>
            </View>
        </Card>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <View className="mb-6">
                <Text className="text-2xl font-bold text-gray-900">Hello, Sarah</Text>
                <Text className="text-gray-500">You have {upcomingCalls.length} calls scheduled today</Text>
            </View>

            <Text className="text-lg font-bold text-gray-900 mb-3">Today's Schedule</Text>
            <FlatList
                data={upcomingCalls}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
}
