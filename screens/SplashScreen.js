import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
// import { NavigationActions } from 'react-navigation';


const SplashScreen = ({navigation}) => {

    setTimeout(() => {
        const resetAction = navigation.reset({
          index: 0,
          routes: [{ name: 'Onboarding' }],
        });
        navigation.dispatch(resetAction);
      }, 3000);

    return (
        <View style={styles.container}>
        <Image source={require('../assets/SplashScreen.png')} style={styles.image} />
        

        </View>
    );
    };

    export default SplashScreen;

const styles = StyleSheet.create({
   container: {
         flex: 1,
            backgroundColor: '#0039bc',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        }
);