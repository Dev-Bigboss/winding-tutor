import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Buttons from '../constants/Buttons';

export default function Validation({navigation}) {
    return (
        <View style={styles.container}>
        <View style={styles.image}>

            <Image source={require('../assets/suuccess.png')} />
        </View>
                    
        <Text style={styles.text}>You have successfully created your account</Text>
        <Buttons title="CONTINUE TO LOGIN" onPress={()=>navigation.navigate('Login')}/>
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 30,
        alignItems: 'center',
      },
      text: {
        fontSize: 16,
        width: 350,
        fontWeight: '420',
        lineHeight: 18,
        color: '#493e3e',
        textAlign: 'center',
        },
    });
