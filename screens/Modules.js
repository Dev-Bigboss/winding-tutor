import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import modules from './constants/data';

const Module = ({title, onPress}) => (
    <TouchableOpacity style={styles.module} onPress={onPress}>
        <Text style={styles.moduleText}>{title}</Text>
    </TouchableOpacity>
);

export default function Modules( navigation ) {
    const handleModulePress = (module) => {
        navigation.navigate('Module', {module});
    };
    return (
        <View style={styles.container}>
       {modules.map((module, index) => (
            <Module key={index} title={module.title} onPress={() => handleModulePress(module)} />
        ))}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: '700',

    },
});

