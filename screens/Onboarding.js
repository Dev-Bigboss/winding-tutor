import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Buttons from '../constants/Buttons';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#f4f6f8" barStyle="dark-content" />
      <Image
        source={require('../assets/onboardin1.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Become a Motor Winding Pro!</Text>
      <Text style={styles.text1}>Learn motor winding from certified teachers with WindingTutor</Text>
    <View>
        <Buttons title="START LEARINING" onPress={()=>navigation.navigate('Signup')}/>
      
        <View style={{flexDirection: 'row', marginTop:10, justifyContent:'center', fontWeight:400, fontSize: 15}}>
          <Text style={{color:'#77797c'}}>Already a student? </Text>
         <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
         <Text style={{color:'#0039bc'}} >Login here</Text>
         </TouchableOpacity>
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
    backgroundColor: '#f4f6f8'
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 35,
    width: 350,
    fontWeight: '700',
    lineHeight: 40,
    color: '#302828',
  },
  text1: {
    fontSize: 15,
    width: 350,
    fontWeight: '400',
    lineHeight: 25,
    color: '#493e3e',
    marginTop: 8
  }
});

export default OnboardingScreen;
