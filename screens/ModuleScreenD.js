import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';

import two from '../assets/two.png';
import two1 from '../assets/two1.png';
import two2 from '../assets/two2.png';
import two3 from '../assets/two3.png';
import two4 from '../assets/two4.png';
import two5 from '../assets/two5.png';
import two6 from '../assets/two6.png';
import two7 from '../assets/two7.png';

const screenWidth= Dimensions.get('window').width;
export default function ModuleScreenD({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.moduleTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.moduleTitle}>MODULE 04: Rewinding Process</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.welcome}>Objectives: </Text>
          <Text style={styles.content}>At the end of this module, electrical/electronic students at any level of education will be able to:</Text>
          <Text style={styles.objective}>⦁	Explain rewinding process
</Text>
          <Text style={styles.objective}>⦁	State the procedure of installing the new windings
</Text>
          <Text style={styles.objective}>⦁	Describe the use of the formulae for the split phase capacitor start motor
</Text>
          <Text style={styles.objective}>⦁	Demonstrate the procedure to secure a completed winding in the stator
 </Text>
          <Text style={styles.objective}>⦁	Connect the winding and terminal box of an electric motor using split phase capacitor start 24slots 2pole (1hp) electric motor.
</Text>
          <Text style={styles.objective}>⦁	State the procedures for the reassembly of the electric motor
</Text>
          <Text style={styles.objective}>⦁	Test the winding/rewinding of electric motor
</Text>
          <Text style={styles.objective}>⦁	State the precautions procedures when carrying out winding /rewinding an electric motor.
</Text>
          <Text style={styles.objective}>⦁ Answer all the MCQ Quiz of module 4</Text>
        
          <Text style={styles.welcome}>Rewinding Process</Text>
        <Text style={styles.content}>Rewinding is also known as unwinding or repairing of electric motors, it is when the winding of the old rotor and stator windings are replaced with new ones. It can be a cost-effective option especially when considering buying a new motor of the same capacity
</Text>
<Text style={styles.welcome}>Installing the New Windings
</Text>
            <Text style={styles.objective}>⦁	When rewinding electric motor, the following should be noted before the previous coil is removed from the stator.</Text>
            <Text style={styles.objective}>⦁	Count the number of slots
</Text>
            <Text style={styles.objective}>⦁	Numbers of spans that made up of a coil should be in series
</Text>
            <Text style={styles.objective}>⦁	Overall coils should be in each stage.</Text>
            <Text style={styles.objective}>⦁	Counting of coils between start legs and the end of coil (Span).</Text>
            <Text style={styles.objective}>⦁	Counting of wire round 3600 on the former to form each coil in series (No of turns).</Text>
            <Text style={styles.objective}>⦁	Gauge of wire  should be in either metric or flat gauge (Size wire Gauge -SWG)</Text>
            <Text style={styles.objective}>⦁	Strands of wire</Text>
            <Text style={styles.objective}>⦁	Winding formulae: In and Out, wave, basket, or lap type of winding</Text>
            <Text style={styles.objective}>⦁	Winding connection</Text>
            <Text style={styles.objective}>⦁	Terminal connection</Text>
            <Text style={styles.objective}>⦁	Coil pounds weight</Text>
    <Text style={styles.welcome}>Winding formulae for a single phase motor
</Text>

        <Text style={styles.content}>The winding formula in single phase motor is the placement of coil format in- and-out of the slot in the stator. It consists of the following:
 </Text>
            <Text style={styles.objective}>⦁	Running winding (Mains)</Text>
            <Text style={styles.objective}>⦁	Starting winding (Helping)
</Text>
            <Text style={styles.objective}>⦁	   Auxiliary winding (Regulator). It depends on the type of model of some motors but common with single phase fan motors
</Text>
        
        <Text style={styles.content}>The following are specifications for the for 24 slot Single phase 1hp motor electric motor winding:
</Text>
<Image source={two7} style={styles.image} />
        <Text style={styles.content}>Winding connection is End to End with Start lead out and right hand starting winding coil terminal Connection. 
</Text>
            <Text style={styles.objective}>⦁	Rewind the stator using the same gauge of wire. It’s important that the wire in the new coils be the same thickness and has the same number of winds as the original windings. Otherwise, it may be a poor fit or cause conductivity issues. Run a search for your engine's voltage online to see what gauge of wire it's commonly fitted with. If you don't see the voltage displayed anywhere, you may have no choice but to eyeball it. If you’re unable to find magnet wire in the same gauge as the motor’s original windings, opt for a size larger rather than smaller. Thicker wire can slow the motor down slightly, but presents less risk of overheating. Consider using this opportunity to upgrade from outdated enamel-coated wire to a higher quality variety, such as nylon and polyurethane-coated wire.
</Text>
    <Image source={two} style={styles.image} />
            <Text style={styles.objective}>⦁	Recreate the original winding pattern for each set of coils. The exact configuration you use will depend on the specific type of motor you’re repairing. To ensure optimal performance, take great care to make each coil tight, precise, and compact. Leave the end of your first winding free and make sure it’s long enough to reach one of the metal tabs circling the brush pads. Unless you’re familiar with the necessary winding pattern, it’s recommended do it professionally. The new sets of insulating materials are placed in the slots by using the old formula found on the plate or calculated formula for the motor ( e.g 1-6-8-10-12 for 24 slots single phase electric motor). Already made coil windings are inserted into the slots and is held in the position by inserting timber wedges or a slice of bamboo tree. Your motor may not work correctly if you make a mistake.
</Text>
<Image source={two1} style={styles.image} />
          <Text style={styles.objective}>⦁	Varnish: Use the varnish to hold the coil tightly in the stator and insulate any exposed part of enamel copper connector.</Text>
<Image source={two2} style={styles.image} />
          
        <Text style={styles.welcome}>Connection of the winding and terminal box of an electric motor using split phase capacitor start 24slots 2pole (1hp) electric motor
</Text>
          <Text style={styles.content}>The winding connection for this particular motor varies due to the amps of each one in their categories, example 1hp single phase of 3.5 amps or 4.5 amps.  We have specific connection due to their starting tongue and efficiency on ability to carry load when working.
    </Text>
            <Text style={styles.objective}>⦁	End lead would be connected to the other side end lead after we have pilled or scrape the enamel insulator on the edge for effective joint for contact continuity, while the remaining two start lead would now be the lead out to the terminal box.  The two section i.e the running winding and starting winding would have two start lead out each.
</Text>
<Image source={two3} style={styles.image} />
          <Text style={styles.content}>Twist the two wires lightly around the edge of the coils for your winding connection ( connect the lead as End- End; 1-2 joint, while the start lead will be the lead out to the terminal connection).</Text>
          <Text style={styles.objective}>⦁	Secure completed windings using the tabs around the stator. Every time you finish a section, lower the tabs down over the coils. This will help hold them in place while you work and ensure a proper connection once the motor is operational. If you wish, you can remove a small amount of insulation paper from the spot where the wire makes contact with the tab using a sharp knife or sandpaper to improve the connection. According to the winding diagram, required connections are made and soldered. All the exposed sections are insulated using suitable material such as linen tapes, cotton tapes and fibers. Shellac varnish coating is applied and the machine is baked in an oven at specific temperature. Then the insulation and the continuity tests are done on the machine.
</Text>
<Image source={two4} style={styles.image} />
          <Text style={styles.objective}>⦁	Reassemble the motor. Once you’ve successfully rewound your motor, reinsert the rotor into the stator and fit both pieces back into the motor housing. Replace the end-plates on either side of the unit and tighten the screws until they’re secure. If you’ve done everything properly, your motor should function like new. Bump test of the end winding to ensure no detrimental resonance frequency present of the completed winding. Finally, Painting may be done on the motor if required. If you don't remember how the motor is supposed to fit together, refer to the photos or videos you took earlier.
</Text>
<Image source={two5} style={styles.image} />
          <Text style={styles.objective}>⦁	Test the motor out. Reinstall the motor in the device it came out of and give it a trial run. If it doesn’t work, there’s a good chance you made a mistake somewhere along the way. At this point, you’ll have no choice but to take it in for professional repairs or purchase a new motor. Turn the motor off immediately if you see smoke or detect a burning smell. It's possible that the new windings are overheating, or that there's a short somewhere in one of the connections.
</Text>
<Image source={two6} style={styles.image} />
        <Text style={styles.welcome}>Electric motor winding Precautions 
</Text>
          <Text style={styles.objective}>⦁	Adopt Best Practices in Rewinding; Best rewinding practices ensures efficiency level of motor close to its original value. Always use the same gauge wire that was used originally. If it’s too heavy, it may slow down or even stop the motor. If it’s too thin, it may overheat and present a possible fire hazard. Only magnet wire should be used to rewind a motor. No other type will be able to channel the electromagnetic energy needed to turn the motor. Using the wrong kind of wire could even lead to electrocution.
</Text>
          <Text style={styles.objective}>⦁	Properly arranged worktable, maintenance tools and gadgets helps in saving time during a repair/maintenance activity, thus enhances safety during maintenance and prevents accidents.
</Text>
          <Text style={styles.objective}>⦁	Don’t go for rewinding again and again for the same motor; Efficiency typically decreases for every rewinding unless special care is taken during rewinding practice. Get the rewinding done skillfully. 
</Text>
          <Text style={styles.objective}>⦁	While dismantling the winding from slots, care should be taken to prevent use of excessive of force as this may damage the core. It is better to apply heat for easy removal of windings. This heating should be controlled and it should be ensured that the core is not exposed to excessive temperatures beyond specified range(s) on the plate. 
</Text>
          <Text style={styles.objective}>⦁	Important parameters such as rated power, current, type of winding design, number of turns, wire gauge etc should be documented carefully to ensure replication of past performance parameters before rewinding started.
</Text>
          <Text style={styles.objective}>⦁	Use wire of same gauge and material. Don’t use aluminum wire in place of copper wire. 
</Text>
          <Text style={styles.objective}>⦁	While removing wire from the brush tabs, care should be taken to bend the tabs gently and as little as possible to prevent any damage. Wires should be completely removed from the tabs before cutting the coils. 
</Text>
          <Text style={styles.objective}>⦁	Damaged insulation should be replaced with the same type and insulation rating.
</Text>
          <Text style={styles.objective}>⦁	The winding design should be replicated with the exact number of turns and the same wire gauge and quality of wire. Any deviation may affect the capacity of the motor and the user should insist for efficiency test post rewinding.
</Text>
     
        <View style={styles.buttonContainer}>
        <Buttons title="TAKE QUIZ" onPress={() => navigation.navigate('QuizModuleD')} />
      </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Buttons title="NEXT MODULE" onPress={() => navigation.navigate('ModuleScreenF')} />
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
