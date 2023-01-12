import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Buttons =  ({title, onPress}) => {
    return (
        <TouchableOpacity style={{backgroundColor: '#0039bc', width: 350, height: 50, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 40}}
        onPress={onPress}>
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: '700'}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Buttons;