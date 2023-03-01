import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const Buttons =  ({title, onPress}) => {
    return (
        <TouchableOpacity style={{backgroundColor: '#0039bc', width: screenWidth * 0.9, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 40}}
        onPress={onPress}>
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '700'}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Buttons;