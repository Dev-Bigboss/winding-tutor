import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import myImage from './thumbnail.jpg';

const screenWidth = Dimensions.get('window').width;

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
    <Text style={styles.profile}>Profile</Text>
     <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
     <View style={styles.header}>
      <Icon name="user-circle" size={80} width={60} height={60} borderRadius={30}/>
        <View style={styles.userInfo}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@example.com</Text>
        </View>
      </View>
      </TouchableOpacity>
      <View style={styles.welcome}>
      <Text>Hi, Welcome to the Electric Motor Winding Learning App.</Text>
      <Text>In this app, you will learn all you need to know about Electric Motor Winding</Text>
      <Text>This app contains six modules of learning with well explained videos and an asssessment at the end of learning all modules</Text>
      </View>
      <View style={styles.moduleContainer} >
      <Text style={styles.profile}>Lets's Get started</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Modules')}>
            <Ionicons name="md-arrow-forward" size={24} color="black" />
          </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleA')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 01</Text>
        <Text style={styles.description}>Electric Motor Fundamentals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleB')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 02</Text>
        <Text style={styles.description}>Parts and Types of an Electric Motor </Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.profile}>Facilitators</Text>
      <View style={styles.instructorContainer}>
          <Ionicons name="md-person" size={24} color="black" />
          <Text style={styles.instructor}>T.C. OGBUANYA | </Text>
          <Text style={styles.instructorType}>Supervisor</Text>
          
        </View>
        <View style={styles.instructorContainer}>
          <Ionicons name="md-person" size={24} color="black" />
          <Text style={styles.instructor}>O.M. ARILESHERE | </Text>
          <Text style={styles.instructorType}>Instructor</Text>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  moduleContainer: {
    // flex: 1,
    backgroundColor: '#f8f9fa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 20,
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: '#fff',
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 10,
  },
  instructor: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10,
  
  },
  instructorType: {
    fontSize: 14,
    color: '#777',
    marginLeft: 10,
  },
  profile: {
    
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
  },
  welcome: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: 20,
    marginTop:0
  },
  card: {
    width: (screenWidth - 60) / 2,
    height: 180,
    backgroundColor: '#d1e9f5',
    borderRadius: 0,
    padding: 0,
    paddingTop: 0,
    marginTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    marginTop: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:5,
    
  },
  description: {
    fontSize: 14,
    color: '#333',
    alignSelf: 'flex-start',
  },
});
