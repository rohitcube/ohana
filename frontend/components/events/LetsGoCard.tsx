// components/events/LetsGoCard.tsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

export const LetsGoCard = () => {
  return (
    <Link href="/createTripScreen">
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <FontAwesome name="plus-circle" size={24} color="#007AFF" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Let's Go!</Text>
            <Text style={styles.subtitle}>Plan a trip with other exchangers</Text>
          </View>
          <FontAwesome name="arrow-right" size={20} color="#007AFF" style={styles.arrow} />
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
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
    borderWidth: 1,
    borderColor: '#E5E5E5',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F0F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#007AFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  arrow: {
    marginLeft: 12,
  },
});