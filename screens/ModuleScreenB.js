import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';
import motor4 from '../assets/motor4.png';
import motor3 from '../assets/motor3.png';
import motor5 from '../assets/motor5.png';
import motor6 from '../assets/motor6.png';
const screenWidth= Dimensions.get('window').width;
export default function ModuleScreenB({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.moduleTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.moduleTitle}>MODULE 02: Types and Applications of Electric Motor</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcome}>Objectives: </Text>
          <Text style={styles.content}>At the end of this module, electrical/electronic students at any level of education will be able to:</Text>
          <Text style={styles.objective}>⦁	List different types of electric motor</Text>
          <Text style={styles.objective}>⦁	Explain single phase and three phase induction motor</Text>
          <Text style={styles.objective}>⦁	State the applications of each type of electric motor</Text>
          <Text style={styles.objective}>⦁	State the difference between Dc Motors and the Induction Motors </Text>
          <Text style={styles.objective}>⦁	Enumerate loses in an A-C motor</Text>
          <Text style={styles.objective}>⦁	Describe the common sources of overheating in an electric motor</Text>
          <Text style={styles.objective}>⦁ Answer all the MCQ Quiz of module 2</Text>
        
        <Text style={styles.content}>Electric motors are single-phase or polyphase (three-phase) motors based on the a.c. voltage. A winding tutor is an app program on a microdevice (Android phone) to demonstrate a capacitor-start induction single-phase water pump and explain the winding and rewinding processes.</Text>
          <Text style={styles.welcome}>Single-phase induction motor:  </Text>
        <Text style={styles.content}> A single-phase motor consists of a set of coils, connected to generate a single wave of alternating magnetomotive force. The single-phase induction motor is not self-starting. They are of different types (split-phase, shaded-pole, and capacitor motors) based on their way of starting since they are not self-starting. </Text>
        
        <Text style={styles.content}>In this type of motor, the start winding can have a series capacitor or a centrifugal switch. When the supply voltage is applied, the current in the main winding lags the supply voltage because of the main winding impedance. And, depending on the starting mechanism impedance, current in the start winding either leads or lags the supply voltage. The angle between the two windings has sufficient phase difference to provide a rotating magnitude field to produce a starting torque. At the point when the motor reaches 70% to 80% of synchronous speed, a centrifugal switch on the motor shaft opens and disconnects the starting winding
</Text>
<Text style={styles.welcome}>Poly-phase induction motor:  </Text>
        <Text style={styles.content}>A polyphase motor (3-phase) consists of two or more phase winding, distributed or connected to produce alternating magnetomotive force. Thus, a three-phase motor has three-phase windings so distributed around the field that the result is three separate magnetomotive force waves that are 90 electrical degrees apart, the waves of which are spaced 120 electrical degrees apart.
</Text>
          <Text style={styles.content}>A 3-phase induction motor consists of two major parts: a stator and a rotor. The stator of three phase induction motor is made up of several slots and is arranged in such a manner in the slots that they produce one rotating magnetic field when the switch is on the three-phase AC supply source. The stator of the motor consists of overlapping winding offset by an electrical angle of 1200. When we connect the primary winding or the stator to a 3-phase AC source, it establishes a rotating magnetic field which rotates at a synchronous speed. Thus the three-phase induction motor is self-starting., with less armature reaction and brush sparking because of the absence of commutators and brushes that may cause sparks, robust in construction, economical and easier to maintain.
    </Text>
    <Text style={styles.welcome}>Other types of Motors:  </Text>
        <Text style={styles.content}>Based on their starting methods, single-phase induction motors are classified into Split Phase Induction Motors, Capacitor Start Motors, Capacitor Start Capacitor Run Motors and Shaded Pole Induction Motor. Other types also include Asynchronous motors, series motors or universal motors, Repulsion motors, Repulsion-start induction-run motors, Synchronous motors, reluctance motors and hysteresis motors.</Text>
        <Text style={styles.welcome}>Induction Motors:  </Text>
        <Text style={styles.content}>The AC induction motor is the most common type of industrial motor. Other examples are shown in the diagram below.</Text>
        <Text style={styles.welcome}>Different examples/types of Motor  </Text>
            <Text style={styles.objective}>1. Split Phase Induction Motor: This induction motor gives better starting torque with a smaller line current. It contains an auxiliary winding and main winding on the stator. The main winding has high reactance and low resistance while the auxiliary winding has high resistance with low reactance. Immediately the motor reaches full speed, the starting winding must be disconnected. This can be accomplished automatically by a centrifugal switch which opens the auxiliary circuit at about 80 per cent of the normal running speed. 
</Text>
<Text style={styles.content}>An alternative is to employ a relay with its coil connected in series with the running winding, the fall of current through the relay as the motor speed rises causing the relay switch in the starting-winding circuit to be opened. The starting winding is short-time rated and must not be left in the circuit for more than a few seconds, as it would become severely overheated. Like all induction motors, split-phase motors have a shunt characteristic, i.e. a constant speed independent of load conditions. The displacement between the currents in stator winding produces a rotating magnetic field. During the running condition, a centrifugal switch removes the starting capacitor from the circuit. This is explained in the diagram below:</Text>
          <Image source={motor3} style={styles.image} />
            <Text style={styles.objective}>2. Capacitor Start Motor: The single-phase capacitor-start induction motor is almost identical in construction with the split-phase machine, but to obtain a higher starting torque with less current, a short-time-rated electrolytic capacitor is used in series with the auxiliary winding. The circuit of the auxiliary winding is broken by a centrifugal or other switch before full speed is reached.  This is shown in the diagram below</Text>
          <Image source={motor4} style={styles.image} />
          <Text style={styles.objective}>3. Capacitor Start Capacitor Run Motor: In the capacitor-start capacitor-run induction motor, two capacitors are employed. This allows a portion of the total capacity to be left in the auxiliary circuit while running, so improving the power factor and consequently reducing the running current and heating. For light duties, a capacitor-run induction motor may be used having a single capacitor which is left in the auxiliary-winding circuit permanently. No switch is required as the auxiliary circuit is in action during starting and running. Its stator contains an auxiliary winding and main winding. This is explained in the circuit below:
</Text>
          <Image source={motor5} style={styles.image} />
          <Text style={styles.objective}>4.	Shaded Pole Induction Motor: For very small horse powers on single-phase supplies the shaded-pole induction motor is useful on account of its simplicity and robustness. The rotor is of the squirrel-cage pattern. The stator has salient poles somewhat similar to those of universal motor but with the field coils connected across the supply. Each pole is divided by a slot cut in the laminations and one of these divided portions in each pole is surrounded by a heavy copper band, known as a shading coil or loop.
</Text>
        <Text style={styles.content}>A single turn of copper strap is wrapped around a portion of the main pole forming a closed circuit. This closed circuit is named as shading coil. The shading coil causes flux in that portion of pole surrounded by it, to lag behind flux in remaining portion of the pole.  Hence two components of flux are displaced in time, which produce a revolving magnetic field which supplies the starting torque. </Text>
          <Image source={motor6} style={styles.image} />
        <Text style={styles.content}>The synchronous speed of an induction motor is 120 x Hz/pole. The difference between the synchronous speed and the actual speed of the rotor is called “Slip” 
        </Text>
        <Text style={styles.welcome}>Losses in an A-C MOTOR & how to reduce them:  </Text>
        <Text style={styles.objective}>⦁	Core loss - better magnet steel - longer stack - thinner laminations
</Text>
        <Text style={styles.objective}>⦁	Stator I2R loss - larger diameter wire

        </Text>
        <Text style={styles.objective}>⦁	Rotor I2R loss - larger diameter rotor bars
.</Text>
        <Text style={styles.objective}>⦁	Mechanical loss - smaller fans & better lubrication system for bearings

        </Text>
        <Text style={styles.objective}>⦁	Stray load loss - better manufacturing tolerances

        </Text>
        <Text style={styles.welcome}>Insulation life of Electric Motor
        </Text>
        <Text style={styles.objective}>⦁	Heat is the cause of reduced insulation life

</Text>
        <Text style={styles.objective}>⦁	Winding insulation is rated according to its thermal capability
        </Text>
        <Text style={styles.objective}>⦁	For every 100C above rated temperature, motor life is reduced by 50%
        </Text>
        <Text style={styles.objective}>⦁	For every 100 C below rated temperature, motor life increases by 2X
</Text>
        <Text style={styles.objective}>⦁	Common sources of overheating are overload, inadequate ventilation, dirt buildup, phase unbalance and high/Low voltage.
        </Text>
        <Text style={styles.content}>The Single phase induction motor is generally used to power machines such as low torque fans, mixers, toys, high speed vacuum cleaners, electric shavers, drilling machines, washing machines, refrigerators, grinders, centrifugal pumps (water pumps), hair dryers and blowers e.t.c. 
</Text>
<Text style={styles.welcome}>Applications of Electric Motor
        </Text>
        <Text style={styles.objective}>⦁	Squirrel Cage Motor – Low rotor resistance – low starting torque – centrifugal pumps, wood working tools etc. 

</Text>
        <Text style={styles.objective}>⦁	Squirrel Cage Motor – High rotor resistance – High starting torque – compressors, crushers, reciprocating pumps etc. 
        </Text>
        <Text style={styles.objective}>⦁	Squirrel Cage Motor – Higher rotor resistance – Higher starting torque – punching presses, hoists, elevators etc 
        </Text>
        <Text style={styles.objective}>⦁	Slip Ring Motor –used for loads requiring severe starting conditions like hoists, cranes elevators etc 
</Text>
        
        <Text style={styles.content}>Three phase Electric motor finds its application in lifts, cranes, hoists, large capacity exhaust fans, lathe machine, crushers, oil extraction mills and large capacity exhaust fans.
        </Text>
       
       <Text style={styles.welcome}>Difference between Dc Motors and the Induction Motors  </Text>
       <Text style={styles.content}>The difference between Dc Motors and the Induction Motors  is that the induction motor has no brushes and is easy to control, many older DC motors are being replaced with induction motors and accompanying inverters in industrial applications. In a DC motor this power is supplied to the armature directly from a DC source, while in an AC motor this power is induced in the rotating device
        </Text>
        <View style={styles.buttonContainer}>
        <Buttons title="TAKE QUIZ" onPress={() => navigation.navigate('QuizModuleB')} />
      </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Buttons title="NEXT MODULE" onPress={() => navigation.navigate('ModuleScreenC')} />
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
