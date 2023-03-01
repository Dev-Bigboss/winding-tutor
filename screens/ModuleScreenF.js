import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';
import myImage from './thumbnail2.jpg';

const screenWidth= Dimensions.get('window').width;
export default function ModuleScreenF({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.moduleTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.moduleTitle}>MODULE 05: Interactive Videos of Winding of electric motor</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
        <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleA')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Video 01</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleB')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Video 02</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleC')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Video 03</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleD')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>video 04</Text>
        
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleE')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Video 05</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleF')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>video 06</Text>
      </TouchableOpacity>
      </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Buttons title="NEXT MODULE" onPress={() => navigation.navigate('ModuleScreenE')} />
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
  moduleTitleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%',
    width: screenWidth * 0.9,
    marginBottom: 20,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    padding: 16,
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
  buttonContainer: {
    marginVertical: 16,
  },
});
