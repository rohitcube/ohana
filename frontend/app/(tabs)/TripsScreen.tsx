// app/(tabs)/events.tsx
import { View, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { EventCard } from '@/components/events/EventCard';
import { LetsGoCard } from '@/components/events/LetsGoCard';

const trips = [
  {
    id: '1',
    eventName: 'Summer Beach Party',
    entryType: 'Group Trip',
    date: 'Aug 15, 2025',
    time: '7:00 PM',
    timezone: 'AEST',
    location: 'Bondi Beach, Sydney',
    price: '€49',
    availableSpots: 15,
    attendees: [
      { id: '1', avatar: 'https://example.com/avatar1.jpg' },
      { id: '2', avatar: 'https://example.com/avatar2.jpg' },
      { id: '3', avatar: 'https://example.com/avatar3.jpg' },
    ]
  },
  {
    id: '2',
    eventName: 'Rooftop Jazz Night',
    entryType: 'Evening Event',
    date: 'Aug 16, 2025',
    time: '8:30 PM',
    timezone: 'AEST',
    location: 'Downtown Rooftop Bar',
    price: '€35',
    availableSpots: 20,
    attendees: [
      { id: '4', avatar: 'https://example.com/avatar4.jpg' },
      { id: '5', avatar: 'https://example.com/avatar5.jpg' },
    ]
  }
];

export default function TripScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Trips Available',
          headerStyle: { backgroundColor: '#000080' },
          headerShadowVisible: false,
        }}
      />
      <LetsGoCard />
      <ScrollView style={styles.container}>
        {trips.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});