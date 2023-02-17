import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import myImage from './thumbnail.jpg'

const screenWidth = Dimensions.get('window').width;
export default function Modules({ navigation }) {
  return (
    <View style={styles.container}>
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
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleC')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 03</Text>
        <Text style={styles.description}>Disassembling an Electric Motor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleD')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 04</Text>
        <Text style={styles.description}>Winding Formulae for a Single phase Motor</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleE')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 05</Text>
        <Text style={styles.description}>Installation of a new winding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleF')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 06</Text>
        <Text style={styles.description}>Connecting Winding and Terminal.</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth,
    paddingHorizontal: 20,
  },
  card: {
    width: (screenWidth - 60) / 2,
    height: 180,
    backgroundColor: '#d1e9f5',
    borderRadius: 0,
    padding: 0,
    paddingTop: 0,
    marginTop: 20,
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
