import React, { useState, useCallback, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from "react-native-youtube-iframe";
import Buttons from '../constants/Buttons';
import Bttn from '../constants/Bttn';


export default function ModuleE({ navigation }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.moduleContainer}>
      <View style={styles.moduleTop}>
        <View style={styles.moduleTitleContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
            <Ionicons name="md-arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.moduleTitle}>MODULE 05</Text>
        </View>
        <View style={styles.video}>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={"DiADGK80VCY"}
          onChangeState={onStateChange}
          style={styles.video}
        />
        </View>

        <Text style={styles.moduleDescription}>Demonstration of Installation of a new winding</Text>
        <View style={styles.instructorContainer}>
          <Ionicons name="md-person" size={24} color="black" />
          <Text style={styles.instructor}>O.M. ARILESHERE | </Text>
          <Text style={styles.instructorType}>Instructor</Text>
        </View>
        </View>
        <View style={styles.moduleBottom}>
        <Text style={styles.welcome}>Welcome to Demonstration of Installation of a new winding. At the end of this module, you should be able to:
        </Text>
        <View style={styles.objective}>
        <Text>1. Understand the steps in installing a new winding</Text>
        <Text>2. Understand the importance of each precaution mentioned in the proceess</Text>
        <Text>3. Understand the importance of a separator and how to use it in the process.</Text>
        <Text>4. Understand how to disassemble a burnt Electric Motor </Text>
        </View>
        <View style={styles.Buttons}>
            <Buttons title="NEXT MODULE" onPress={()=>navigation.navigate('ModuleF')}/>
            </View>
            <View style={styles.button}>
            <Bttn title="PREVIOUS MODULE" onPress={()=>navigation.navigate('ModuleD')}/>
        </View>
        </View>
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
  moduleContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  moduleTop: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleBottom: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  moduleTitleContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  moduleTitle: { 
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  moduleDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    alignSelf: 'flex-start',
    marginTop: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  video: {
    height: 200,
    backgroundColor: '#333',
    marginTop: 40,
    width: 400,
    marginBottom: 10,
  },
  instructorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 20,
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
  welcome: {
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  objective: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
  },
    Buttons: {
    marginTop: 0,
    marginBottom:0,
    },
  button: {
    marginTop: 0,
    marginBottom: 20,
  }  
});
