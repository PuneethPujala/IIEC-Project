import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import { mockAlerts } from '../../mockData/alerts';
import { AlertCircle, Clock } from 'lucide-react-native';

export default function Alerts({ navigation }) {
    const [filter, setFilter] = useState('all');

    const renderItem = ({ item }) => (
        <TouchableOpacity className={`bg-white p-4 rounded-xl mb-3 border-l-4 shadow-sm ${item.priority === 'high' ? 'border-l-red-500' :
                item.priority === 'medium' ? 'border-l-orange-500' : 'border-l-blue-500'
            }`}>
            <View className="flex-row justify-between mb-2">
                <View className="flex-row items-center gap-2">
                    <AlertCircle size={16} color={
                        item.priority === 'high' ? '#EF4444' :
                            item.priority === 'medium' ? '#F97316' : '#3B82F6'
                    } />
                    <Text className="font-bold text-gray-900 capitalize">{item.type.replace('_', ' ')}</Text>
                </View>
                <Text className={`text-xs px-2 py-0.5 rounded-full capitalize ${item.status === 'resolved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {item.status}
                </Text>
            </View>
            <Text className="text-gray-600 text-sm mb-3">{item.message}</Text>
            <View className="flex-row justify-between items-center">
                <Text className="text-xs text-gray-500">Patient: {item.patientName}</Text>
                <View className="flex-row items-center">
                    <Clock size={12} color="#9CA3AF" />
                    <Text className="text-xs text-gray-500 ml-1">
                        {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <Text className="text-2xl font-bold text-gray-900 mb-4">Alerts</Text>
            <View className="flex-row gap-2 mb-4">
                {['all', 'unresolved'].map(f => (
                    <TouchableOpacity
                        key={f}
                        onPress={() => setFilter(f)}
                        className={`px-4 py-2 rounded-full ${filter === f ? 'bg-gray-900' : 'bg-gray-200'}`}
                    >
                        <Text className={`capitalize ${filter === f ? 'text-white' : 'text-gray-700'}`}>{f}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                data={mockAlerts.filter(a => filter === 'all' || a.status === filter)}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </ScreenWrapper>
    );
}
