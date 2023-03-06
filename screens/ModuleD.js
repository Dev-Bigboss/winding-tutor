
import React, { useState, useCallback, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Dimensions, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from "react-native-youtube-iframe";
import Buttons from '../constants/Buttons';

const screenWidth= Dimensions.get('window').width;
export default function ModuleB({ navigation }) {
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
    
        <View style={styles.moduleTitleContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ModuleScreenF')}>
            <Ionicons name="md-arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.moduleTitle}>VIDEO 04</Text>
        </View>
      
      <ScrollView style={styles.scrollContainer}>

        <View style={styles.video}>
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={"HuBNrDEOpi4"}
          onChangeState={onStateChange}
          style={styles.video}
        />
        </View>

      </ScrollView>
        
        <View style={styles.buttons}>
            <Buttons title="NEXT VIDEO" onPress={()=>navigation.navigate('ModuleE')}/>
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
  video: {
    height: 225,
    backgroundColor: '#333',
    width: screenWidth * 1 ,
    marginTop: '50%',
  },
  buttons: {
    marginVertical: 16,
  }
});


      