import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Input from '../../components/common/Input';
import { mockCaretakers } from '../../mockData/caretakers';
import { Star } from 'lucide-react-native';

export default function Caretakers({ navigation }) {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }) => (
        <TouchableOpacity className="bg-white p-4 rounded-xl mb-3 flex-row items-center shadow-sm border border-gray-100">
            <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full bg-gray-200" />
            <View className="ml-3 flex-1">
                <Text className="font-bold text-gray-900">{item.name}</Text>
                <View className="flex-row items-center">
                    <Star size={12} color="#EAB308" fill="#EAB308" />
                    <Text className="text-xs text-gray-500 ml-1">{item.performanceScore}% Score</Text>
                </View>
            </View>
            <View className={`px-2 py-1 rounded-full ${item.status === 'available' ? 'bg-green-100' : 'bg-gray-100'}`}>
                <Text className={`text-xs ${item.status === 'available' ? 'text-green-700' : 'text-gray-600'} capitalize`}>
                    {item.status.replace('_', ' ')}
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <Text className="text-2xl font-bold text-gray-900 mb-4">Caretakers</Text>
            <Input
                placeholder="Search caretakers..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={mockCaretakers}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </ScreenWrapper>
    );
}
