// app/(tabs)/events.tsx
import { View, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { EventCard } from '@/components/events/EventCard';
import { LetsGoCard } from '@/components/events/LetsGoCard';

const MOCK_EVENTS = [
  {
    id: '1',
    name: 'Summer Beach Party',
    location: 'Bondi Beach, Sydney',
    time: '7:00 PM, Aug 15',
    image: 'https://example.com/beach.jpg', // Replace with your image
    attendees: [
      { id: '1', avatar: 'https://example.com/avatar1.jpg' },
      { id: '2', avatar: 'https://example.com/avatar2.jpg' },
      { id: '3', avatar: 'https://example.com/avatar3.jpg' },
    ]
  },
  {
    id: '2',
    name: 'Rooftop Jazz Night',
    location: 'Downtown Rooftop Bar',
    time: '8:30 PM, Aug 16',
    image: 'https://example.com/jazz.jpg', // Replace with your image
    attendees: [
      { id: '4', avatar: 'https://example.com/avatar4.jpg' },
      { id: '5', avatar: 'https://example.com/avatar5.jpg' },
    ]
  },
  // Add more events as needed
];

export default function EventsScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Events',
          headerStyle: { backgroundColor: '#000080' },
          headerShadowVisible: false,
        }}
      />
      <LetsGoCard />
      <ScrollView style={styles.container}>
        {MOCK_EVENTS.map(event => (
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