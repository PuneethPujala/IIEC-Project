import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Input from '../../components/common/Input';
import { mockPatients } from '../../mockData/patients';

export default function Patients({ navigation }) {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }) => (
        <TouchableOpacity className="bg-white p-4 rounded-xl mb-3 flex-row items-center shadow-sm border border-gray-100">
            <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full bg-gray-200" />
            <View className="ml-3 flex-1">
                <Text className="font-bold text-gray-900">{item.name}</Text>
                <Text className="text-xs text-gray-500">ID: {item.id}</Text>
            </View>
            <View className={`px-2 py-1 rounded-full ${item.complianceRate > 80 ? 'bg-green-100' : 'bg-yellow-100'}`}>
                <Text className={`text-xs ${item.complianceRate > 80 ? 'text-green-700' : 'text-yellow-700'}`}>
                    {item.complianceRate}% Comp.
                </Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <Text className="text-2xl font-bold text-gray-900 mb-4">Patients</Text>
            <Input
                placeholder="Search patients..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                data={mockPatients}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </ScreenWrapper>
    );
}
