// components/events/EventCard.tsx
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface EventCardProps {
  event: {
    name: string;
    location: string;
    time: string;
    image: string;
    attendees: Array<{
      id: string;
      avatar: string;
    }>;
  };
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link href="/EventDetailScreen">
        <View style={styles.card}>
        <Image
            source={{ uri: event.image }}
            style={styles.image}
            defaultSource={require('../../assets/images/react-logo.png')}
        />
        <View style={styles.content}>
            <Text style={styles.name}>{event.name}</Text>
            <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="#666" />
            <Text style={styles.location}>{event.location}</Text>
            </View>
            <View style={styles.timeContainer}>
            <Ionicons name="time" size={16} color="#666" />
            <Text style={styles.time}>{event.time}</Text>
            </View>
            <View style={styles.attendeesContainer}>
            {event.attendees.map((attendee, index) => (
                <Image
                key={attendee.id}
                source={{ uri: attendee.avatar }}
                style={[
                    styles.attendeeAvatar,
                    { marginLeft: index > 0 ? -10 : 0 }
                ]}
                />
            ))}
            <Text style={styles.attendeeCount}>
                +{event.attendees.length} going
            </Text>
            </View>
        </View>
        </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  attendeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  attendeeAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  attendeeCount: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
});