import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/common/Card';
import { Users, UserCheck, AlertTriangle, Activity } from 'lucide-react-native';

export default function Dashboard({ navigation }) {
    const stats = [
        { title: 'Total Patients', value: '1,234', icon: Users, color: '#2563EB', bg: 'bg-blue-100' },
        { title: 'Active Caretakers', value: '45', icon: UserCheck, color: '#16A34A', bg: 'bg-green-100' },
        { title: 'Pending Alerts', value: '3', icon: AlertTriangle, color: '#DC2626', bg: 'bg-red-100' },
        { title: 'Compliance Rate', value: '98%', icon: Activity, color: '#9333EA', bg: 'bg-purple-100' },
    ];

    return (
        <ScreenWrapper>
            <ScrollView className="p-4" showsVerticalScrollIndicator={false}>
                <View className="mb-6">
                    <Text className="text-2xl font-bold text-gray-900">Manager Dashboard</Text>
                    <Text className="text-gray-500">Overview of platform activity</Text>
                </View>

                <View className="flex-row flex-wrap justify-between gap-y-4">
                    {stats.map((stat, index) => (
                        <Card key={index} className="w-[48%] p-3">
                            <View className={`${stat.bg} w-10 h-10 rounded-full items-center justify-center mb-3`}>
                                <stat.icon size={20} color={stat.color} />
                            </View>
                            <Text className="text-2xl font-bold text-gray-900">{stat.value}</Text>
                            <Text className="text-xs text-gray-500">{stat.title}</Text>
                        </Card>
                    ))}
                </View>

                <View className="mt-6">
                    <Text className="text-lg font-bold text-gray-900 mb-3">Recent Alerts</Text>
                    <Card className="mb-3 border-l-4 border-l-red-500">
                        <View className="flex-row items-start">
                            <AlertTriangle size={20} color="#DC2626" />
                            <View className="ml-3 flex-1">
                                <Text className="font-bold text-gray-900">Missed Medication</Text>
                                <Text className="text-sm text-gray-500">John Doe • 10:30 AM</Text>
                            </View>
                        </View>
                    </Card>
                    <Card className="mb-3 border-l-4 border-l-yellow-500">
                        <View className="flex-row items-start">
                            <AlertTriangle size={20} color="#CA8A04" />
                            <View className="ml-3 flex-1">
                                <Text className="font-bold text-gray-900">Low Adherence</Text>
                                <Text className="text-sm text-gray-500">Mary Smith • Yesterday</Text>
                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
}
