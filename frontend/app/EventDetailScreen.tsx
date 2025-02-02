// screens/EventDetailScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const EventDetailScreen = () => {
  const [isInterested, setIsInterested] = useState(false);
  const event = {
    imageUrl: 'frontend/assets/images/Screenshot 2024-03-22 at 8.19.17 PM.png',
    title: 'Cajon Del Maipo Hike',
    date: '12/02/2025',
    attendees: ['juan', 'jose', 'diego'],
    interested: [],
    description: 'Just a short and low-intensity hike to explore the region and meet new people! The hike is approximately 4 hours to and fro, and there should be time to relax and enjoy the views from the top',
  };
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: event.imageUrl }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>

        <View style={styles.stats}>
          <Text>{event.attendees.length} Going</Text>
        </View>

        <Text style={styles.description}>{event.description}</Text>

        <View style={styles.attendees}>
          <Text style={styles.sectionTitle}>Who's Going</Text>
          {/* Add attendee avatars/list here */}

        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isInterested && styles.buttonActive]}
            onPress={() => setIsInterested(!isInterested)}
          >
            <FontAwesome name="star" size={20} color={isInterested ? "#fff" : "#007AFF"} />
            <Text style={[styles.buttonText, isInterested && styles.buttonTextActive]}>
              {isInterested ? 'Interested' : 'Show Interest'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Join Chat')}
          >
            <FontAwesome name="comments" size={20} color="#007AFF" />
            <Text style={styles.buttonText}>Join Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  attendees: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    flex: 0.48,
  },
  buttonActive: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    marginLeft: 8,
    color: '#007AFF',
    fontSize: 16,
  },
  buttonTextActive: {
    color: '#fff',
  },
});

export default EventDetailScreen;