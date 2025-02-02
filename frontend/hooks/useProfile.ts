// hooks/useProfile.ts
import { useState, useEffect } from 'react';

interface ProfileData {
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  location: string;
  interests: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      // Simulating API call with mock data
      const mockProfile: ProfileData = {
        name: 'John Doe',
        email: 'john@example.com',
        bio: 'Software Developer',
        location: 'New York, USA',
        interests: 'Hiking, Day-trips, Sports',
        socials: {
          twitter: '@johndoe',
          github: 'johndoe'
        }
      };

      setProfile(mockProfile);
    } catch (err) {
      setError('Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []); // This will run when component mounts

  const refreshProfile = async () => {
    setLoading(true);
    await fetchProfile();
  };

  return { profile, loading, error, refreshProfile };
};