import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useOrganization } from './OrganizationContext';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const { getOrganization, setCurrentOrganization } = useOrganization();

    useEffect(() => {
        loadStorageData();
    }, []);

    const loadStorageData = async () => {
        try {
            const savedAuth = await AsyncStorage.getItem('auth');
            if (savedAuth) {
                const authData = JSON.parse(savedAuth);
                setIsAuthenticated(true);
                setUser(authData.user);
                setSelectedRole(authData.role);
                if (authData.user.organizationId) {
                    const org = getOrganization(authData.user.organizationId);
                    setCurrentOrganization(org);
                }
            }
        } catch (e) {
            console.error('Failed to load auth data', e);
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (role, credentials) => {
        // Mock login logic with hierarchical roles
        let mockUser = {
            id: Math.random().toString(36).substr(2, 9),
            name: credentials.name || 'Demo User',
            email: credentials.email,
            role: role,
            avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
            permissions: []
        };

        // Assign organization based on role (Mocking logic)
        if (role !== 'super_admin') {
            const demoOrgId = 'org-1'; // Default to ABC Healthcare for demo
            mockUser.organizationId = demoOrgId;
            const org = getOrganization(demoOrgId);
            setCurrentOrganization(org);
        }

        // Set permissions based on role
        switch (role) {
            case 'super_admin':
                mockUser.permissions = ['manage_platform', 'manage_organizations', 'view_all_analytics'];
                mockUser.name = 'Platform Admin';
                break;
            case 'org_admin':
                mockUser.permissions = ['manage_organization', 'manage_managers', 'view_org_analytics'];
                mockUser.name = 'Org Admin';
                break;
            case 'manager':
                mockUser.permissions = ['manage_caretakers', 'manage_patients', 'manage_mentors'];
                mockUser.name = 'Dr. Emily Chen';
                break;
            case 'caretaker':
                mockUser.permissions = ['view_assigned_patients', 'log_calls'];
                mockUser.name = 'Sarah Johnson';
                break;
            case 'mentor':
                mockUser.permissions = ['view_linked_patient'];
                mockUser.name = 'Family Member';
                break;
            case 'patient':
                mockUser.permissions = ['view_own_records'];
                mockUser.name = 'John Doe';
                break;
            default:
                break;
        }

        setUser(mockUser);
        setSelectedRole(role);
        setIsAuthenticated(true);

        try {
            await AsyncStorage.setItem('auth', JSON.stringify({
                user: mockUser,
                role: role
            }));
        } catch (e) {
            console.error('Failed to save auth data', e);
        }

        return mockUser;
    };

    const logout = async () => {
        setIsAuthenticated(false);
        setUser(null);
        setSelectedRole('');
        setCurrentOrganization(null);
        try {
            await AsyncStorage.removeItem('auth');
        } catch (e) {
            console.error('Failed to remove auth data', e);
        }
    };

    const value = {
        isAuthenticated,
        user,
        selectedRole,
        login,
        logout,
        setSelectedRole,
        isLoading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
