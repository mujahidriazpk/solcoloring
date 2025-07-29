'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Creation {
  id: string;
  prompt: string;
  imageUrl: string;
  createdAt: string;
  metadata?: {
    originalPrompt?: string;
    categoryId?: string;
    subcategoryId?: string;
    itemId?: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email?: string;
  createdAt: string;
  totalCreations: number;
}

interface UserContextType {
  profile: UserProfile | null;
  creations: Creation[];
  isLoading: boolean;
  error: string | null;
  saveCreation: (creation: Omit<Creation, 'id' | 'createdAt'>) => void;
  deleteCreation: (id: string) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  clearError: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROFILE: 'solcoloring_profile',
  CREATIONS: 'solcoloring_creations',
};

// Default user profile
const createDefaultProfile = (): UserProfile => ({
  id: 'user_' + Date.now(),
  name: 'Anonymous User',
  createdAt: new Date().toISOString(),
  totalCreations: 0,
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [creations, setCreations] = useState<Creation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem(STORAGE_KEYS.PROFILE);
      const savedCreations = localStorage.getItem(STORAGE_KEYS.CREATIONS);

      if (savedProfile) {
        setProfile(JSON.parse(savedProfile));
      } else {
        // Create default profile for new users
        const defaultProfile = createDefaultProfile();
        setProfile(defaultProfile);
        localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(defaultProfile));
      }

      if (savedCreations) {
        setCreations(JSON.parse(savedCreations));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      setError('Failed to load user data');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save profile to localStorage whenever it changes
  useEffect(() => {
    if (profile) {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    }
  }, [profile]);

  // Save creations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CREATIONS, JSON.stringify(creations));
  }, [creations]);

  const saveCreation = (newCreation: Omit<Creation, 'id' | 'createdAt'>) => {
    try {
      const creation: Creation = {
        ...newCreation,
        id: 'creation_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
      };

      setCreations(prev => [creation, ...prev]);
      
      // Update profile total creations count
      if (profile) {
        setProfile(prev => prev ? {
          ...prev,
          totalCreations: prev.totalCreations + 1
        } : prev);
      }

      setError(null);
    } catch (error) {
      console.error('Error saving creation:', error);
      setError('Failed to save creation');
    }
  };

  const deleteCreation = (id: string) => {
    try {
      setCreations(prev => prev.filter(creation => creation.id !== id));
      
      // Update profile total creations count
      if (profile) {
        setProfile(prev => prev ? {
          ...prev,
          totalCreations: Math.max(0, prev.totalCreations - 1)
        } : prev);
      }

      setError(null);
    } catch (error) {
      console.error('Error deleting creation:', error);
      setError('Failed to delete creation');
    }
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    if (profile) {
      setProfile(prev => prev ? { ...prev, ...updates } : prev);
      setError(null);
    }
  };

  const clearError = () => {
    setError(null);
  };

  const value: UserContextType = {
    profile,
    creations,
    isLoading,
    error,
    saveCreation,
    deleteCreation,
    updateProfile,
    clearError,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
} 