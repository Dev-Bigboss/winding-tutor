import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import Buttons from '../constants/Buttons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';



const { width, height } = Dimensions.get('window');
export default function Signup({ navigation }) { 
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleSignup = () => {
    Keyboard.dismiss();
    alert('name: ' + name + ' phoneNumber ' + phoneNumber + ' password: ' + password); 
    navigation.navigate('Validation');
  }



  return (
    <View 
    style={styles.container}
    onPress={Keyboard.dismiss}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subTitle}>Unclock access to expert-led tutorials</Text>
      <Text style={styles.heading}>Full Name</Text>
      
      <View style={styles.inputHeader}>
      <TextInput 
        style={styles.input} 
        placeholder="Enter your full Name"
      autoCapitalize="none"
      onChangeText={setName}
      value={name}
       />
      </View>
      <Text style={styles.heading}>Phone Number</Text>
      <View style={styles.inputHeader}>
      <TextInput
                        style={styles.input}
                        placeholder="Enter your phone number"
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        onChangeText={setPhoneNumber}
                        value={phoneNumber}
                    />
      </View>
      <Text style={styles.heading}>Password</Text>
      <View style={styles.inputHeader}>
        <TextInput 
      style={styles.input} 
      placeholder="Enter your password"
      autoCapitalize='none'
      secureTextEntr={!showPassword}
      onChangeText={setPassword}
      value={password}
       />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Ionicons
          name={showPassword ? 'ios-eye' : 'ios-eye-off'}
          size={20}
          color="#000"
        />
      </TouchableOpacity>
      </View>
      <View style={styles.Buttons}>
      <Buttons title="Sign Up" onPress={handleSignup} />
      </View>
      <Text style={styles.disclaimer}>  
        By clicking sign up, you agree to our Terms of Service and Privacy Policy
      </Text>
      <View style={{flexDirection:'row', marginTop: 40}}>
        <Text>Already a student? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#0039bc'}}>Login here</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
      fontWeight: '700',
      lineHeight: 40,
      color: '#302828',
      width: width * 0.9, // make width responsive
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 25,
    color: '#493e3e',
    width: width * 0.9, // make width responsive
    marginTop: height * 0.01, // make height responsive
  },

  inputHeader: {
    position: 'relative',
    flexDirection: 'row', 
    backgroundColor: '#e6eaf4', 
    width: width * 0.9, // make width responsive
    height: height * 0.05, // make height responsive
    borderRadius: 5,
    borderColor: '#0039bc',
  },
  heading: {
    width: width * 0.9, 
    fontSize: 15, 
    fontWeight: '600',
    paddingTop: height * 0.015, // make height responsive
    paddingBottom: height * 0.007, // make height responsive
  },

  input: {
    backgroundColor: '#e6eaf4',
    flexDirection: 'row',
    width: width * 0.9, // make width responsive
    height: height * 0.05, // make height responsive
    paddingHorizontal: 10,
    marginBottom: height * 0.025, // make height responsive
    borderRadius: 5,
    flex: 1,
  },
  Buttons: {
    marginTop: height * 0.05,
    width: width * 0.9,  // make height responsive
  },
 disclaimer: {
    fontSize: 13,
    fontWeight: '400',
    color: '#493e3e',
    width: width * 0.9, // make width responsive
    marginTop: 10,
    lineHeight: 14.25,
 }
});