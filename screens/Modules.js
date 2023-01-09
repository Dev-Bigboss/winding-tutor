import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


export default function Modules() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Modules Screen, Buddy!</Text>
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

