import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Icon, TouchableOpacity, Keyboard, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';
import Homescreen from './Homescreen';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');
export default function Login({ navigation }) {

    const { navigate } = useNavigation();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePhoneNumber = (text) => {
        setPhoneNumber(text);
    }
    const handlePassword = (text) => {
        setPassword(text);
    }

    const handleSubmit = () => {
        Keyboard.dismiss();
        alert('Phone number: ' + phoneNumber + ' password: ' + password);
        navigation.navigate('Homescreen');
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Text style={styles.welcome}>Welcome back Buddy!</Text>
            <Text style={styles.continue}>Let's continue to improve your skills</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.heading}>Phone Number</Text>
                <View style={styles.inputHeader}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your phone number"
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        onChangeText={handlePhoneNumber}
                        value={phoneNumber}
                    />
                </View>

                <Text style={styles.heading}>Password</Text>
                <View style={styles.inputHeader}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry={!showPassword}
                        onChangeText={handlePassword}
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
            </View>

            <View style={styles.Buttons}>
                <Buttons title="LOGIN" onPress={handleSubmit} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 13 }}>
                <Text style={{ color: '#77797c' }}>Not registered? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{ color: '#0039bc', fontWeight: '700' }}>Sign up here</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{ color: '#0039bc', marginTop: 20 }}>Forgot password? </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    welcome: {
      fontSize: 30,
      fontWeight: '700',
      lineHeight: 40,
      color: '#302828',
      width: width * 0.9, // make width responsive
    },
    continue: {
      fontSize: 15,
      fontWeight: '400',
      lineHeight: 25,
      color: '#493e3e',
      width: width * 0.9, // make width responsive
      marginTop: height * 0.01, // make height responsive
    },
    inputContainer: {
      marginTop: height * 0.05, // make height responsive
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
    icon: {
      position: 'absolute',
      right: 10,
      alignSelf: 'flex-end',
    },
    Buttons: {
      marginTop: height * 0.05,
      width: width * 0.9,  // make height responsive
    },
  });
  
