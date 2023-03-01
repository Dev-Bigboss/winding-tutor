import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';
import motor1 from '../assets/motor1.png';
import motor2 from '../assets/motor2.png';

const screenWidth= Dimensions.get('window').width;

export default function ModuleScreenA({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.moduleTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.moduleTitle}>MODULE 01: Electric Motor Fundamentals</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcome}>Objectives: </Text>
          <Text style={styles.content}>At the end of this module, electrical/electronic students at any level of education will be able to:</Text>
          <Text style={styles.objective}>⦁ Define electric motor</Text>
          <Text style={styles.objective}>⦁ Define an induction motor</Text>
          <Text style={styles.objective}>⦁ Explain the principle of operation of electric motor</Text>
          <Text style={styles.objective}>⦁ State at least one difference between Induction motor and Asynchronous motor</Text>
          <Text style={styles.objective}>⦁ Explain stator, rotor and armature in relation to electric motor.</Text>
          <Text style={styles.objective}>⦁ State at least two advantages of Induction motor.</Text>
          <Text style={styles.objective}>⦁ Answer all the MCQ Quiz of module 1</Text>
          <Text style={styles.welcome}>Meaning of Electric Motor: </Text>
        
        <Text style={styles.content}>An electric motor is an electro-mechanical device that converts electrical energy into mechanical energy. Its principle of operation is electromagnetic induction. Tghe type of AC supply determines the types of induction motors. Electric motors work on the interaction between the motor's magnetic field and electric current in a winding.</Text>
        <Text style={styles.content}>This interaction generates a force in the form of torque, which is applied to the motor's shaft. In magnetc motors, magnetic fields form in the rotor and the stator. The product between the two fields gives rise to force and torque on the motor shaft. One, or both, of these fields must be made to change with the rotation of the motor. This is done by switching the poles on and off at the right time or varying the strength of the pole.</Text>
        
        <Text style={styles.content}>An induction motor (IM) is atype of asynchronous AC motor where power is supplied to the rotationg device by means of electromagnetic induction (figure 2).</Text>
        <Text style={styles.content}>An induction motor is a rotating transformer because the stator (stationary part) is essentially the primary side of the transformer and the rotor (rotating part) is the secondary side.</Text>
          <Image source={motor1} style={styles.image} />
          <Image source={motor2} style={styles.image} />
          <Text style={styles.content}>The construction of an electric motor consists of a stator and rotor. The rotor is separated from the stator by a small air gap (0.4 mm to 4mm). Depending on rotor construction, induction motors are grouped as 
            </Text>
            <Text style={styles.objective}>1. Squirrel Cage Induction Motor (SCIM) </Text>
            <Text style={styles.objective}>2. Slip Ring Induction Motor (SRIM)</Text>

        <Text style={styles.content}>The motor frame provides protection for the stator windings, conducts heat away from the stator of the motor, and provides rigidity to the complete motor assembly.</Text>
        <Text style={styles.content}>The stator consists of wound ‘poles’ that carry the supply current that induces a magnetic field in the conductor. The number of ‘poles’ can vary between motor types, but the poles are always in pairs (i.e., 2, 4, 6, etc.). </Text>
        <Text style={styles.content}>The rotor is the non-stationary part of a rotary electric motor or alternator, which rotates because the wires and magnetic field of the motor are arranged so that a torque is developed about the rotor’s axis. In some designs, the rotor can serve as the motor armature, across which the input voltage is supplied. The stationary part of an electric motor is the stator. A common problem is called cogging torque.
        </Text>
        <Text style={styles.content}>An armature is one of two principal electrical components of an electromechanical machine–a motor or generator. The other is the field winding, field magnet. The role of the “field" component is to create a magnetic field (magnetic flux) for the armature to interact with, so this component can comprise either permanent magnets, or electromagnets formed by a conducting coil. The armature, in contrast, must carry current, so it is always a conductor or a conductive coil, oriented normal to both the field and the direction of motion, whether torque (for a rotating machine), or force (linear machine). The armature’s role is two-fold: (a) to carry current crossing the field, thus creating shaft torque (in a rotating machine) or force (in a linear machine), and (b) to generate an electromotive force (“EMF”).
        </Text>
        <Text style={styles.content}>When the motor is started, the slip is equal to 1 as the rotor speed is zero, so the induced emf in the rotor is large. As a result, a very high current flows through the rotor. This is similar to a transformer with the secondary coil short circuited, which causes the primary coil to draw a high current from the mains. Similarly, when an induction motor starts, a very high current is drawn by the stator, on the order of 5–9 times the full load current. This high current can damage the motor windings and because it causes heavy line voltage drop, other appliances connected to the same line may be affected by the voltage fluctuation. To avoid such effects, the starting current should be limited. A soft start starter is a device which limits the starting current by providing reduced voltage to the motor. A good example is by introducing capacitor as a soft start starter. Once the rotor speed increases, the full rated voltage is given to it.
        </Text>
        <Text style={styles.welcome}>Advantages of Induction Motor
        </Text>
        <Text style={styles.objective}>1. Its construction is quite simple in nature. The working of the motor is independent of the environmental condition. This is because the induction motor is robust and mechanically strong.</Text>
        <Text style={styles.objective}>2. A squirrel cage induction motor does not contain brushes, slip rings, or commutators. Due to this reason, the cost of the motor is quite low. However, slip rings are used in wound-type induction motors to add external resistance to the rotor winding.
        </Text>
        <Text style={styles.objective}>3. Due to the absence of brushes, there are no sparks in the motor. It can also be operated in hazardous conditions.</Text>
        <Text style={styles.objective}>4. Unlike synchronous motors, a 3-phase induction motor has a high starting torque, good speed regulation, and overload capacity.
        </Text>
        <Text style={styles.objective}>5. An induction motor is a highly efficient machine, with full load efficiency varying from 85 to 97 percent.
        </Text>
        <View style={styles.buttonContainer}>
        <Buttons title="TAKE QUIZ" onPress={() => navigation.navigate('QuizModuleA')} />
      </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Buttons title="NEXT MODULE" onPress={() => navigation.navigate('ModuleScreenB')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moduleTitleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: '5%',
    width: screenWidth * 0.9,
    marginBottom: 20,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
        alignSelf: 'flex-start',
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
  },
  content: {
        width: screenWidth * 0.9,
        alignSelf: 'center',
    marginBottom: 16,
    fontSize: 15,
  },
  objective: {
        marginBottom: 5,
    width: screenWidth * 0.9,
    alignSelf: 'center',
    fontSize: 15,

  },
  image: {
        marginTop: 10,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  buttonContainer: {
    marginVertical: 16,
  },
});
