import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import { Phone, Clock } from 'lucide-react-native';
import { mockCalls } from '../../mockData/calls';

export default function Calls({ navigation }) {
    // Mock filter for patient ID 1
    const myCalls = mockCalls.filter(c => c.patientId === '1');

    const renderItem = ({ item }) => (
        <Card className="mb-3 border-l-4 border-l-blue-500">
            <View className="flex-row justify-between items-start mb-2">
                <Text className="font-bold text-gray-900">{item.caretakerName}</Text>
                <Text className="text-xs text-gray-500">{new Date(item.callTime).toLocaleDateString()}</Text>
            </View>
            <View className="flex-row items-center justify-between mt-2">
                <View className="flex-row items-center">
                    <Clock size={14} color="#6B7280" />
                    <Text className="text-xs text-gray-500 ml-1">{new Date(item.callTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                </View>
                <View className={`px-2 py-1 rounded-full ${item.status === 'completed' ? 'bg-green-100' : 'bg-blue-100'}`}>
                    <Text className={`text-xs capitalize ${item.status === 'completed' ? 'text-green-700' : 'text-blue-700'}`}>
                        {item.status}
                    </Text>
                </View>
            </View>
        </Card>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <Text className="text-2xl font-bold text-gray-900 mb-4">Your Calls</Text>
            <FlatList
                data={myCalls}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
}
