import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SplashScreen, Onboarding, Login, Signup} from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './screens/ForgotPassword';
 import Validation from './screens/Validation';
 import Home from './screens/Home';
 import Modules from './screens/Modules';
 import Module from './screens/Module';
 import Profile from './screens/Profile';
import Tabs from './screens/Tabs';
import Homescreen from './screens/Homescreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
        name="Validation" component={Validation} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Home" component={Home}
        options={{
          tabBar: () => <Tabs />
        }} />
        <Stack.Screen name="Modules" component={Modules}
        options={{
          tabBar: () => <Tabs />
        }} />
        <Stack.Screen name="Module" component={Module}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="Profile" component={Profile}
        options={{
          tabBar: () => <Tabs />
        }} />
       
      </Stack.Navigator> 
      

     </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
