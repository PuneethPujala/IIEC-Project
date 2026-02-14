import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Phone, Pill } from 'lucide-react-native';
import Dashboard from '../screens/patient/Dashboard';
import Calls from '../screens/patient/Calls';
import Medications from '../screens/patient/Medications';

const Tab = createBottomTabNavigator();

export default function PatientNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color }) => <Home size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Calls"
                component={Calls}
                options={{
                    tabBarIcon: ({ color }) => <Phone size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Medications"
                component={Medications}
                options={{
                    tabBarIcon: ({ color }) => <Pill size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}
