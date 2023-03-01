import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Keyboard, Dimensions } from 'react-native';
import Buttons from '../constants/Buttons';
import { StatusBar } from 'expo-status-bar';


const { width, height} = Dimensions.get('window');
export default function ForgotPassword({ navigation }) { 
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleResetPassword = () => {
    // Make API call to reset password for the user
    // api.resetPassword(email).then((response) => {
    //   if (response.success) {
    //     Alert.alert('Success', 'Password reset instructions have been sent to your email');
    //     // Navigate back to the login screen
    //     navigation.navigate('Login');
    //   } else {
        // Show an error message
        Keyboard.dismiss();
        Alert.alert('Error', 'Failed to reset password');
    //   }
    // });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.subTitle}>No problem! Enter the email address you registered with and we'll send you a password reset link</Text>
      <Text style={styles.heading}>Enter your Phone Number</Text>
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
      <View style={styles.Buttons}>
        <Buttons title="RESET PASSWORD" onPress={handleResetPassword} />
      </View>
      <View style={{flexDirection:'row', marginTop: 40}}>
        <Text>Remember your password? </Text>
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
      marginTop:0, // make height responsive 
      marginBottom: height * 0.05, // make height responsive
       },
    subTitle: {
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 25,
      color: '#493e3e',
      width: width * 0.9, // make width responsive
      marginTop: height * 0.01, // make height responsive
    },
    heading: {
      width: width * 0.9, 
      fontSize: 15, 
      fontWeight: '600',
      paddingTop: height * 0.015, // make height responsive
      paddingBottom: height * 0.007, // make height responsive
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
      width: width * 0.9, 
      marginTop: height * 0.05, // make height responsive
    },
});

