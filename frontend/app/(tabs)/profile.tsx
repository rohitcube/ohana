// app/(tabs)/profile.tsx
import { useCallback, useState } from 'react';
import {
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileSection } from '@/components/profile/ProfileSection';
import { ProfileField } from '@/components/profile/ProfileField';
import { useProfile } from '@/hooks/useProfile';
import React from 'react';

export default function ProfileScreen() {
  const router = useRouter();
  const { profile, loading, error, refreshProfile } = useProfile();
  console.log('Profile data:', { profile, loading, error }); // Add this
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refreshProfile();
    setRefreshing(false);
  }, [refreshProfile]);

  const handleEditPress = () => {
    console.log('click edit profile');
  };

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Profile',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#fff' },
        }}
      />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ProfileHeader
          name={profile.name}
          avatar={profile.avatar}
          onEditPress={handleEditPress}
        />

        <ProfileSection title="Personal Information">
          <ProfileField label="Email" value={profile.email} />
          <ProfileField label="Interests" value={profile.interests} />
          {profile.bio && <ProfileField label="Bio" value={profile.bio} />}
        </ProfileSection>

        {profile.socials && Object.keys(profile.socials).length > 0 && (
          <ProfileSection title="Social Links">
            {Object.entries(profile.socials).map(([platform, handle]) => (
              handle && (
                <ProfileField
                  key={platform}
                  label={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  value={handle}
                />
              )
            ))}
          </ProfileSection>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});