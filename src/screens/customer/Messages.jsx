import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import { mockMessages } from '../../mockData/messages'; // Ensure this exists or mock locally
import { Search } from 'lucide-react-native';

// Fallback mock if import fails (as we created it earlier for web but structure might differ?)
// We ported mockData folder, so it should be there.

export default function Messages({ navigation }) {
    const [search, setSearch] = useState('');

    const renderItem = ({ item }) => (
        <TouchableOpacity className="flex-row items-center p-4 bg-white border-b border-gray-100">
            <View className="relative">
                <Image
                    source={{ uri: item.avatar || `https://ui-avatars.com/api/?name=${item.sender}` }}
                    className="w-12 h-12 rounded-full bg-gray-200"
                />
                {item.online && (
                    <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
            </View>
            <View className="ml-3 flex-1">
                <View className="flex-row justify-between mb-1">
                    <Text className="font-bold text-gray-900">{item.sender}</Text>
                    <Text className="text-xs text-gray-500">{item.timestamp}</Text>
                </View>
                <Text numberOfLines={1} className={item.unread > 0 ? 'text-gray-900 font-bold' : 'text-gray-500'}>
                    {item.lastMessage}
                </Text>
            </View>
            {item.unread > 0 && (
                <View className="bg-blue-600 w-5 h-5 rounded-full items-center justify-center ml-2">
                    <Text className="text-white text-xs font-bold">{item.unread}</Text>
                </View>
            )}
        </TouchableOpacity>
    );

    return (
        <ScreenWrapper className="pb-0">
            <View className="p-4 bg-white border-b border-gray-200">
                <Text className="text-2xl font-bold text-gray-900 mb-3">Messages</Text>
                <View className="flex-row items-center bg-gray-100 rounded-xl px-3 py-2">
                    <Search size={20} color="#9CA3AF" />
                    <TextInput
                        placeholder="Search messages..."
                        value={search}
                        onChangeText={setSearch}
                        className="flex-1 ml-2 text-gray-900"
                    />
                </View>
            </View>

            <FlatList
                data={mockMessages}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </ScreenWrapper>
    );
}
