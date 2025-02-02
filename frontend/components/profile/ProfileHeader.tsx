import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export const ProfileHeader = ({
  name,
  avatar,
  onEditPress
}: {
  name: string;
  avatar?: string;
  onEditPress: () => void;
}) => (
  <View style={styles.header}>
    <View style={styles.avatarContainer}>
      {avatar ? (
        <Image source={{ uri: avatar }} style={styles.avatar} />
      ) : (
        <View style={[styles.avatar, styles.placeholderAvatar]}>
          <FontAwesome name="user" size={40} color="#666" />
        </View>
      )}
      <Pressable onPress={onEditPress} style={styles.editButton}>
        <FontAwesome name="pencil" size={16} color="#fff" />
      </Pressable>
    </View>
    <Text style={styles.name}>{name}</Text>
  </View>
);


const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    avatarContainer: {
      position: 'relative',
      marginBottom: 10,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    placeholderAvatar: {
      backgroundColor: '#f0f0f0',
      justifyContent: 'center',
      alignItems: 'center',
    },
    editButton: {
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: '#007AFF',
      width: 32,
      height: 32,
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'SpaceMono',
    },
    section: {
      backgroundColor: '#fff',
      marginTop: 10,
      padding: 15,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      fontFamily: 'SpaceMono',
    },
    sectionContent: {
      gap: 10,
    },
    field: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#ccc',
    },
    fieldLabel: {
      fontSize: 16,
      color: '#666',
      fontFamily: 'SpaceMono',
    },
    fieldValue: {
      fontSize: 16,
      fontFamily: 'SpaceMono',
    },
  });