import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Buttons from '../constants/Buttons';


const screenWidth= Dimensions.get('window').width;
const questionsAndAnswers = [
    {
      question: 'How do I connect the first and last wire?',
      answer: 'Both of these wires will connect to the tab you used to begin installing the new windings.',
    },
    {
      question: 'How do I test the connection of the coils after rewinding?',
      answer: 'You can test the connection using a digital multimeter. Place one of the probes on one of the copper commutation pads and the other on any part of the steel laminations of the armature. Repeat this process for each commutation pad.',
    },
    {
      question: 'In rewinding, what is the tolerance or can the length of each sector vary slightly without causing any problem?',
      answer: 'The length can vary a little bit, especially if you are winding by hand. For the best performance, try to match the original motors winding length as close as possible.',
    },
    {
      question: 'Why is it necessary to take the data of the old winding before it is removed?',
      answer: 'Because what you put back needs to be identical to what originally came out.',
    },
    {
      question: 'Here are my specs: 36 slots, medium speed (1400 rpm) single phase (230 volts). What will the coil span be?',
      answer: 'It depends on the original maker\'s design. 1 to 5-7-9 or any combination producing a quarter of the full pitch.',
    },
    {
      question: 'How do I know which of the wires is positive and which is negative?',
      answer: 'Positive is often indicated by a red or brown color while negative is indicated by blue. Sometimes, you can see a P and N sign on each wire to indicate positive and negative as well.',
    },
    {
      question: 'What if i want to rewind a motor and don\'t have data from previous motors to determine the wire gauge, coils, turn e.t.c.?',
      answer: 'You could use the nameplate to determine the power of the motor and then get to know number of conductors and size to use.',
    },
    {
      question: 'How do I determine the turns, pitch, and wire gauge to rewind my electric motor? ',
      answer: 'Motor winding is a lot more complicated than people think. There are several things to take into consideration. Coil size is very important -- too small a coil and windings will not allow you to get rotor back into stator core, too big and you will not get end shields back onto stator body. Next, count the number of slots (some coils occupy two slots) and Count pitch of coils -- the bigger the pitch, the faster the speed. Determine the coil connection: series, cons, pole, etc. See how many wires in parallel coil are made up of. Measure each one with micrometer and chop off connection end (known as the crown). Pull coils out. Count wires divided by wires in parallel = turns',

    },
    {
      question: 'How do I know which of the wires is positive and which is negative?',
      answer: 'Positive is often indicated by a red or brown color while negative is indicated by blue. Sometimes, you can see a P and N sign on each wire to indicate positive and negative as well.',
    },
    {
      question: 'How will a motor perform if a wire of a higher gauge than the original is used?',
      answer: 'It will probably pull more amps, but this is not recommended. Stick with the original size',
    },
    {
      question: 'Why do I use semi-closed slots in the armature?  ',
      answer: 'It relates to the core design and also helps to keep the windings and the winding wedges in place when running at a high speed.      ',
    },
    {
      question: 'In 2 poles winding, what will be the RPM of the motor when the phase connections of the coil is beginning to ending?  ',
      answer: 'Two-pole motors run a maximum of 3000 RPM if running at 50Hz. The connection you have described is called series  ',
    },
    {
      question: 'What formula do I use to determine the amount of wire needed to rewind the motor?  ',
      answer: 'After stripping the motor of old winding, measure the gauge of the wire using a micrometer or a wire gauge tool, and measure the weight of the copper stripped'
    },
    {
      question: 'How do I know what thickness of coil wire I need to rewind an electric motor?     ',
      answer: 'You can determine the thickness by using a micrometer screw gauge. But it will be best if you first remove the insulation on the wire by burning, using a cigarette lighter or a match stick. After that you can check the wire gauge in tables available online      ',
    },
    {
      question: 'How many counts in each slot when rewinding an electric motor?      ',
      answer: 'If possible, practice on an old or inexpensive motor before you attempt to rewind an expensive one. A/C motors tend to be the easiest for beginners to work with, as all of the windings are concentrated in the stator.       ',
    },
  ];
export default function ModuleScreenE({ navigation }) {
    const [showAnswers, setShowAnswers] = useState([]);

    const toggleAnswer = (index) => {
      setShowAnswers((prevState) => {
        const newArray = [...prevState];
        newArray[index] = !prevState[index];
        return newArray;
      });
    };
    
  
  return (
    <View style={styles.container}>
      <View style={styles.moduleTitleContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Ionicons name="md-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.moduleTitle}>MODULE 06: Application Tutor Performance Test
</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
        {questionsAndAnswers.map((item, index) => (
        <View key={index}>
          <TouchableOpacity style={styles.button} onPress={() => toggleAnswer(index)}>
            <Text style={styles.buttonText}>{item.question}</Text>
          </TouchableOpacity>
          {showAnswers[index] && <Text style={styles.content}>{item.answer}</Text>}
        </View>
      ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Buttons title="BACK TO HOME" onPress={() => navigation.navigate('Homescreen')} />
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
  button: {
    backgroundColor: '#0039bc', 
    width: screenWidth * 0.9,  
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        },

  content: {
        width: screenWidth * 0.9,
        alignSelf: 'center',
    marginBottom: 16,
    fontSize: 15,
  },
  
  buttonContainer: {
    marginVertical: 16,
  },

});
