import React from 'react';
import {SplashScreen, Onboarding, Login, Signup} from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './screens/ForgotPassword';
 import Validation from './screens/Validation';
 import Home from './screens/Home';
 import Modules from './screens/Modules';
 import ModuleA from './screens/ModuleA';
 import ModuleB from './screens/ModuleB';
 import ModuleC from './screens/ModuleC';
 import ModuleD from './screens/ModuleD';
  import ModuleE from './screens/ModuleE';
  import ModuleF from './screens/ModuleF';
 import Profile from './screens/Profile';
import Tabs from './screens/Tabs';
import Assessment from './screens/Assessment';
import Homescreen from './screens/Homescreen';
import { Ionicons } from '@expo/vector-icons';
import ModuleScreenA from './screens/ModuleScreenA';
import ModuleScreenB from './screens/ModuleScreenB';
import ModuleScreenC from './screens/ModuleScreenC';
import ModuleScreenD from './screens/ModuleScreenD';
import ModuleScreenE from './screens/ModuleScreenE'
import ModuleScreenF from './screens/ModuleScreenF';
import QuizModuleA from './screens/QuizModuleA';
import QuizModuleB from './screens/QuizModuleB';
import QuizModuleC from  './screens/QuizModuleC';
import QuizModuleD from './screens/QuizModuleD';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdSoEKiapigmLGXbkXicdSQIpqhhS8yvo",
  authDomain: "winding-tutor.firebaseapp.com",
  databaseURL: "https://winding-tutor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "winding-tutor",
  storageBucket: "winding-tutor.appspot.com",
  messagingSenderId: "921315047079",
  appId: "1:921315047079:web:6adb171b7b78ea08c54d82",
  measurementId: "G-NZSE863KYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        <Stack.Screen name="QuizModuleA" component={QuizModuleA}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="QuizModuleB" component={QuizModuleB}
        options={{ tabBarVisible: false }} />
        
        <Stack.Screen name="QuizModuleC" component={QuizModuleC}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="QuizModuleD" component={QuizModuleD}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleA" component={ModuleA}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleB" component={ModuleB}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleC" component={ModuleC}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleD" component={ModuleD}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleE" component={ModuleE}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleF" component={ModuleF}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleScreenA" component={ModuleScreenA}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleScreenB" component={ModuleScreenB}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleScreenC" component={ModuleScreenC}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleScreenD" component={ModuleScreenD}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleScreenE" component={ModuleScreenE}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="ModuleScreenF" component={ModuleScreenF}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="Assessment" component={Assessment}
        options={{ tabBarVisible: false }} />
        <Stack.Screen name="Profile" component={Profile}
        options={{
          tabBar: () => <Tabs />
        }} />
       
      </Stack.Navigator> 
      

     </NavigationContainer>
  );
}

