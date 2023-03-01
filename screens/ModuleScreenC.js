import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';
import one from '../assets/one.png';
import one1 from '../assets/one1.png';
import one3 from '../assets/one3.png';
import one4 from '../assets/one4.png';
import one5 from '../assets/one5.png';
import one6 from '../assets/one6.png';
import one7 from '../assets/one7.png';
import one8 from '../assets/one8.png';
import one9 from '../assets/one9.png';
import one10 from '../assets/one10.png';
import one11 from '../assets/one11.png';
import one12 from '../assets/one12.png';
import one13 from '../assets/one13.png';
import one14 from '../assets/one14.png';

const screenWidth= Dimensions.get('window').width;
export default function ModuleScreenC({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.moduleTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.moduleTitle}>MODULE 03: Winding Process</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcome}>Objectives: </Text>
          <Text style={styles.content}>At the end of this module, electrical/electronic students at any level of education will be able to:</Text>
          <Text style={styles.objective}>⦁	Define electric motor winding
</Text>
          <Text style={styles.objective}>⦁	List at least three parts of electric motor winding
</Text>
          <Text style={styles.objective}>⦁	Describe electric motor data plate
</Text>
          <Text style={styles.objective}>⦁	Identify different types of winding 
 </Text>
          <Text style={styles.objective}>⦁	State the procedure to disassemble an electric motor winding
</Text>
          <Text style={styles.objective}>⦁	Enumerate the process of removal of the old/burnt coil
</Text>
          <Text style={styles.objective}>⦁	Demonstrate the process of replacement of the insulation paper lining in the stator of electric winding
</Text>
          <Text style={styles.objective}>⦁ Answer all the MCQ Quiz of module 3</Text>
        
          <Text style={styles.welcome}>Meaning of Electric Motor Winding: </Text>
        <Text style={styles.content}>Electric motor winding is the arrangement of an electrical conductor that generates the magnetic field in an electric motor, which drives the rotors. Some parts of electric motor winding are electric motor slots, box terminal, stator, rotor, and nameplate.
</Text>
<Text style={styles.welcome}>Materials/tools used for electric motor winding
</Text>
        <Text style={styles.content}>The materials/tools needed for the winding of the electric motor include insulator paper (Leather rod/Glass paper/Press pan), enamel insulator wire (copper or aluminium), copper varnish, sleaves of different sizes and Pegs (local materials- Bamboo), coil former, cutter, spanner and so on.
 </Text>
        
<Text style={styles.content}>Enamel insulator copper
</Text>
        <Text style={styles.content}>The electric motor data plate 

</Text>
        <Text style={styles.content}>The nameplate is the most important factor to consider before removing the burnt coil from the slot. It is important to note the nameplate data (shown in Figure 2) and the connection of the winding pattern of the machine before the commencement of rewinding. The information on the nameplate includes manufacturer type, rated volts & full load amps, rated Frequency, class of insulation, rated power, time rating, service factor, efficiency at full load, power factor at full load, frame size, design code, and class of protection. Once these details are recorded the damaged windings are carefully removed. 
</Text>
          <Image source={one} style={styles.image} />
    <Text style={styles.welcome}>Pictures of types of winding 
</Text>
<Image source={one1} style={styles.image} />
<Image source={one3} style={styles.image} />
<Image source={one4} style={styles.image} />
        <Text style={styles.welcome}>Disassembling of an electric motor winding
</Text>
          <Text style={styles.content}>Wipe off your work surface with a lint-free cloth. Run the cloth lightly over the table, desk, or work bench where you’ll be doing your tinkering to remove any standing dust or debris. It should be completely clean before you crack open the motor. Working on a dirty surface could introduce dust or debris into the motor housing. It’s especially important to make sure there are no metal shavings in the area, as you’ll be working with magnetic parts that can accidentally attract them in which may result in the damage of the coil.
    </Text>
    <Image source={one5} style={styles.image} />
            <Text style={styles.objective}>⦁	Remove the motor’s outer housing. On most types of small motors, this will require to unfasten four screws from around a small endplate on the top and bottom of the unit. Open the cover of conduit box. Once they’re out of the way, you’ll be able to see each of the motor’s primary internal components, including the stator and coil windings. The stator is a fixed steel drum encircling the innards of an electric motor. It’s typically magnetized or fitted with coils of magnet wire. The armature (also known as the “rotor” depending on the type of motor) is a small bearing-like piece in the center of the motor construction. When it receives the magnetic force of the stator and windings, it spins, powering the motor. The windings are long coils of copper wire typically located around the stator. They channel electromagnetic energy into the rotor to cause the motor to run.
</Text>
<Image source={one6} style={styles.image} />
            <Text style={styles.objective}>⦁	Force the rotor out of the stator by hand. Once you’ve removed the upper endplate from the motor housing, guide the rotor straight out the bottom of the circular stator, along with the attached lower endplate. A burnt motors winding could be detected by unique smell (burned lacquer). Inspection of original winding determines upgrades of existing if necessary. Heat up winding with flame torch to burn out the rest of lacquer. When the old lacquer is burnt, the remaining winding will be out of stators slots or gaps. You'll encounter some resistance from the magnets around the stator, which means you may have to push a little harder than you might expect before it will give way. Wear gloves to protect your hands and avoid transferring the oils from your skin to any part of the stator or rotor. Be careful not to damage the rotor or any of the surrounding parts of the motor. Once you’ve removed the stator and rotor, set the housing aside where it won’t accidentally attract stray metal pieces.
</Text>
<Image source={one7} style={styles.image} />
        <Text style={styles.welcome}>Removing the old/burnt coil from electric motor</Text>
<Image source={one8} style={styles.image} />
          <Text style={styles.objective}>⦁	Use a screwdriver to open the seal on each of the slot for easy access to each of the coil inside the slot.
</Text>
<Image source={one9} style={styles.image} />
          <Text style={styles.objective}>⦁	Cut the old windings free using a pair of wire cutters. Depending on the type of motor you’re working on and where the problem lies, the faulty windings may be found on the stator. Snip each coil of wire where it connects at the top of the protruding posts. Cutting out the spent windings can be painstaking work. It may be necessary to sever one wire at a time to make removing the coils more manageable. Be sure to count the number of winds in each coil so that you can rebuild the motor in the exact same configuration.
</Text>
<Image source={one10} style={styles.image} />
          <Text style={styles.objective}>⦁	Pull the cut coils free of the stator by hand. Once you’ve cut every last connection, the old windings should come out with a couple of tugs. If you're having trouble getting them started, use the tip of your screwdriver or a pair of pliers for extra leverage. Before you handle the cut coils, pull on a pair of thick work gloves to safeguard yourself against cuts and scratches. If the coils refuse to budge, it's possible that they haven't been severed completely. Look for connections around the posts or bottom of the coil that you might have missed. Remove old colour form motor with sandblasting. Sandblasting is the process where sand hits the surface of work piece with very high speed to remove coloration. It should be done with carefulness so as not to damage the surface of electric motor, especially edges of covers
</Text>
<Image source={one11} style={styles.image} />
        <Text style={styles.welcome}>Replacement of the insulation paper lining in the stator of electric winding</Text>
<Image source={one12} style={styles.image} />
          <Text style={styles.objective}>⦁	First, pull out the old paper out of the slots in the stator using a pair of pliers or tweezers and make sure the empty slots are free of debris. Then, measure the width of the slots and cut a sheet of insulation paper into strips of the same width. Fold the strips gently and slip them into the slots in the stator individually byhand. If the insulation paper that’s already in place appears to be in good shape (it should be clean and intact), you can simply leave it where it is and begin the rewinding process. If it appears burnt or otherwise damaged, it’s a good idea to replace it before proceeding. You can order electric motor insulation paper online from suppliers that carry electrical materials
</Text>
          <Text style={styles.objective}>⦁	Make a note of the way each of the main components looks. Documenting the motor’s appearance before you begin making modifications to it can be helpful in case you make a mistake. You could even make a video recording of the deconstruction process in order to ensure that you’re recreating the original winding pattern and connections precisely.
</Text>
<Image source={one13} style={styles.image} />
<Image source={one14} style={styles.image} />
     
        <View style={styles.buttonContainer}>
        <Buttons title="TAKE QUIZ" onPress={() => navigation.navigate('QuizModuleC')} />
      </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Buttons title="NEXT MODULE" onPress={() => navigation.navigate('ModuleScreenD')} />
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
        marginLeft: 10,
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
    width: screenWidth * 0.9,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 16,
  },
});
