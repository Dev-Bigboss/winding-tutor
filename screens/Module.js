import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'react-native-video';
import {Ionicons} from '@expo/vector-icons';


const Module = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.moduleContainer}>
        <View style={styles.moduleTitleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color="#000" />
          </TouchableOpacity>
           <Text style={styles.moduleTitle}>{item.title}</Text>
        </View>
        <Video 
        source={{ uri: String(item.video) }}
        style={styles.video}
        paused={true}
        onError={(error) => {
          console.log('error')
        }}
        />
        <Text style={styles.moduleDescription}>{item.description}</Text>
        <View style={styles.instructorcontainer}>
          <Ionicons name="md-person" size={24} color="black" />
          <Text style={styles.instructor}>{item.instructor} | </Text>
          <Text style={styles.instructorType}>Instructor</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleTitleContainer: {
    flexDirection: 'row',
    
    alignItems: 'center',
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
  },
  moduleDescription: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  video: {
    width: 300,
    aspectRatio: 16 / 9,
    },
    instructorcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
});

export default Module;
