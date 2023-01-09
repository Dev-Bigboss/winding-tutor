import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Home Screen, Buddy!
      </Text>
    

    </View>
  );
};

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

export default HomeScreen;
