import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import myImage from './thumbnail.jpg'

const screenWidth = Dimensions.get('window').width;
export default function Modules({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollcontainer}>

    <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleScreenA')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 01</Text>
        <Text style={styles.description}>Electric Motor Fundamentals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleScreenB')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 02</Text>
        <Text style={styles.description}>Types and Applications of Electric Motor </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleScreenC')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 03</Text>
        <Text style={styles.description}>Winding Process</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleScreenD')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 04</Text>
        <Text style={styles.description}>Rewinding Process</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleScreenF')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 05</Text>
        <Text style={styles.description}>Interactive Videos of Winding of electric motor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ModuleScreenE')}>
        <Image 
          style={styles.image}
          source={myImage} 
        />
        <Text style={styles.title}>Module 06</Text>
        <Text style={styles.description}>Application Tutor Performance Test</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
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
