import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import { CheckCircle, XCircle, Clock } from 'lucide-react-native';
import { mockCalls } from '../../mockData/calls';

export default function History({ navigation }) {
    const pastCalls = mockCalls.filter(c => c.status !== 'pending');

    const renderItem = ({ item }) => (
        <Card className={`mb-3 border-l-4 ${item.status === 'completed' ? 'border-l-green-500' : 'border-l-red-500'}`}>
            <View className="flex-row justify-between items-start mb-2">
                <Text className="font-bold text-gray-900">{item.patientName}</Text>
                <View className="flex-row items-center">
                    {item.status === 'completed' ? (
                        <CheckCircle size={14} color="#16A34A" />
                    ) : (
                        <XCircle size={14} color="#DC2626" />
                    )}
                    <Text className={`text-xs font-medium ml-1 capitalize ${item.status === 'completed' ? 'text-green-700' : 'text-red-700'}`}>
                        {item.status}
                    </Text>
                </View>
            </View>
            <View className="flex-row justify-between items-center">
                <Text className="text-gray-500 text-xs">{new Date(item.callTime).toLocaleString()}</Text>
                <Text className="text-gray-500 text-xs font-medium">{item.duration || 'Missed'}</Text>
            </View>
            {item.notes && (
                <View className="mt-2 bg-gray-50 p-2 rounded-lg">
                    <Text className="text-xs text-gray-600 italic">"{item.notes}"</Text>
                </View>
            )}
        </Card>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <Text className="text-2xl font-bold text-gray-900 mb-4">Call History</Text>
            <FlatList
                data={pastCalls}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </ScreenWrapper>
    );
}
