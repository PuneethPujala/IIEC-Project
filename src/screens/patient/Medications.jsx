import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import { CheckCircle, Circle, Pill } from 'lucide-react-native';
import { mockMedications } from '../../mockData/medications';

export default function Medications({ navigation }) {
    const renderItem = ({ item }) => (
        <Card className="mb-3 flex-row items-center justify-between">
            <View className="flex-row items-center flex-1">
                <View className={`p-2 rounded-full mr-3 ${item.taken ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <Pill size={20} color={item.taken ? '#16A34A' : '#6B7280'} />
                </View>
                <View>
                    <Text className={`font-bold ${item.taken ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                        {item.name}
                    </Text>
                    <Text className="text-xs text-gray-500">{item.dosage} • {item.frequency}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => {/* Toggle taken mock */ }}>
                {item.taken ? (
                    <CheckCircle size={24} color="#16A34A" fill="#DCFCE7" />
                ) : (
                    <Circle size={24} color="#D1D5DB" />
                )}
            </TouchableOpacity>
        </Card>
    );

    return (
        <ScreenWrapper className="p-4 pb-0">
            <Text className="text-2xl font-bold text-gray-900 mb-4">My Medications</Text>
            <FlatList
                data={mockMedications}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
}
