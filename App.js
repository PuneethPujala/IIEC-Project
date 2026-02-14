import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { OrganizationProvider } from './src/context/OrganizationContext';
import RootNavigator from './src/navigation/RootNavigator';
import "./global.css"

export default function App() {
  return (
    <SafeAreaProvider>
      <OrganizationProvider>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </AuthProvider>
      </OrganizationProvider>
    </SafeAreaProvider>
  );
}
