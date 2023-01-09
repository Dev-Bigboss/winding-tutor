import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Buttons from '../constants/Buttons';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function Signup({ navigation }) { 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleSignup = () => {
    Keyboard.dismiss();
    alert('name: ' + name + ' email: ' + email + ' password: ' + password); 
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
      <Text style={styles.heading}>Email</Text>
      <View style={styles.inputHeader}>
      <TextInput 
      style={styles.input} 
      placeholder="Enter your email"
      autoCapitalize='none'
      onChangeText={setEmail}
      value={email}
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
    width:350,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '400',
    color: '#493e3e',
    width: 350,
    marginBottom: 20,
  },

  inputHeader: {
    position: 'relative',
    flexDirection: 'row',
    backgroundColor: '#e6eaf4',
    width: 350,
    height: 40,
    borderRadius: 5,
    borderColor: '#0039bc',

  },
  heading: {
    fontSize: 15,
    width: 350,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 5,
  },

  input: {
    backgroundColor: '#e6eaf4',
    flexDirection: 'row',
    width: 350,
    height: 40,
    flex: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  Buttons: {
    marginTop: 40,
  },
 disclaimer: {
    fontSize: 13,
    fontWeight: '400',
    color: '#493e3e',
    width: 350,
    marginTop: 10,
    lineHeight: 14.25,
 }
});
