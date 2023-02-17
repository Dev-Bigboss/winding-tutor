import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Icon name="user-circle" size={80} width={60} height={60} borderRadius={30}/>
        <View style={styles.userInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
        </View>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButton} onPress={()=> navigation.navigate('EditProfile')}>
          <Ionicons name="person-outline" size={24} color="#6c757d" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={()=> navigation.navigate('ChangePassword')}>
          <Ionicons name="lock-closed-outline" size={24} color="#6c757d" />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="log-out-outline" size={24} color="#6c757d" onPress={()=> navigation.navigate('Login')}/>
          <Text style={styles.optionText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userInfo: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    color: '#6c757d',
  },
  options: {
    marginTop: 32,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 16,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  optionText: {
    marginLeft: 16,
    fontSize: 16,
  },
});
