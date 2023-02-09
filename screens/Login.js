import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TextInput, Icon, TouchableOpacity, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';
import Homescreen from './Homescreen';
import { useNavigation } from '@react-navigation/native';

export default function Login({ navigation }) {

    const { navigate } = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleEmail = (text) => {
        
        setEmail(text);
    }
    const handlePassword = (text) => {

        setPassword(text);
    }

    const handleSubmit = () => {
        Keyboard.dismiss();
        alert('email: ' + email + ' password: ' + password);
        navigation.navigate('Homescreen');
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Text style={styles.welcome}>Welcome back Buddy!</Text>
            <Text style={styles.continue}>Let's continue to improve your skills</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.heading}>Email</Text>
            <View style={styles.inputHeader}>
            <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
            />
            </View>
            
            <Text style={styles.heading}>Password</Text>
           <View style={styles.inputHeader}> 
            <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
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
            </View>
            <View style={styles.Buttons}>
            <Buttons title="LOGIN" onPress={handleSubmit}/>
            </View>
            <View style={{flexDirection:'row', marginTop: 13}}>
                <Text style={{color:'#77797c'}}>Not registered? </Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                <Text style={{color:'#0039bc', fontWeight: '700'}}>Sign up here</Text>  
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{color:'#0039bc', marginTop:20}}>Forgot password? </Text>
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
        width: 350,
    },
    continue: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 25,
        color: '#493e3e',
        width: 350,
        marginTop: 8
    },
    inputContainer: {
        marginTop: 40,
        
    },

    inputHeader: {
        position: 'relative',
        flexDirection: 'row', 
        backgroundColor: '#e6eaf4', 
        width:350,
        height: 40,
        borderRadius: 5,
       
        borderColor: '#0039bc',
    },

    heading: {
        width: 350, 
        fontSize: 15, 
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 5,
    },

    input: {
        backgroundColor: '#e6eaf4',
        flexDirection: 'row',
        width: 350,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,
        flex: 1,
    },
    
    icon: {
        position: 'absolute',
        right: 10,
        alignSelf: 'flex-end',
    },

    Buttons: {
        marginTop: 40,
    },
});

