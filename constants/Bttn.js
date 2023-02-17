import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Bttn =  ({title, onPress}) => {
    return (
        <TouchableOpacity style={{backgroundColor: '#f3c2b2', width: 350, height: 50, borderColor:'#0039bc', borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 40}}
        onPress={onPress}>
        <Text style={{color: '#0039bc', fontSize: 20, fontWeight: '700'}}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Bttn;