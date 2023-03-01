import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Buttons from '../constants/Buttons';

const screenWidth =  Dimensions.get('window').width;
const questions = [    {      question: 'The motor used for the compressors is...',      options: ['d.c. series motor', 'shaded pole motor', 'capacitor-start capacitor-run motor', 'reluctance motor'],
      answer: 'capacitor-start capacitor-run motor'
    },
    {
      question: 'Which of the following single-phase motors has relatively poor starting torque?',
      options: ['Universal motor', 'Repulsion motor', 'Capacitor motor', 'All single phase motors have zero starting torque.'],
      answer: 'Capacitor motor'
    },
    {
      question: 'The electric motor used in portable drills is...',
      options: ['Capacitor run motor', 'Hysteresis motor', 'Universal motor', 'Repulsion motor'],
      answer: 'Universal motor'
    },
    {
      question: 'Which motor is normally free from mechanical and magnetic vibrations?',
      options: ['Split phase motor', 'Universal motor', 'Hysteresis motor', 'Shaded pole motor'],
      answer: 'Shaded pole motor'
    },
    {
      question: 'In which single-phase motor, the rotor has no teeth or winding?',
      options: ['Split phase motor', 'Reluctance motor', 'Hysteresis motor', 'Universal motor'],
      answer: 'Reluctance motor'
    },
    {
      question: 'Which of the following single-phase motors is suitable for timing and control purposes?',
      options: ['Reluctance motor', 'Series motor', 'Repulsion motor', 'Universal motor'],
      answer: 'Reluctance motor'
    },
    {
      question: 'The power factor of a single-phase induction motor is usually...',
      options: ['Lagging', 'Always leading', 'Unity', 'Unity to 0.8 leading'],
      answer: 'Lagging'
    },
    {
      question: 'Which of the following motors can be run on AC. as well as D.C. supply?',
      options: ['Universal motor', 'Repulsion motor', 'Synchronous motor', 'Reluctance motor'],
      answer: 'Universal motor'
    },
    {
      question: 'If a particular application needs high speed and high starting torque, then which of the following motor will be preferred?',
      options: ['Universal motor', 'Shaded pole type motor', 'Capacitor start motor', 'Capacitor start and run motor'],
      answer: 'Universal motor'
    },
    {
      question: 'Why is it necessary to take the proper data while working on a motor, important?',
      options: ['It is just something we do in schools', 'It is added paper work to increase the price it costs the consumer', 'So that no difficulty will be encountered upon reassembly', 'It is not needed'],
      answer: 'So that no difficulty will be encountered upon reassembly'
    },
    {
      question: 'What is meant by the pitch of a coil on a motor?',
      options: ['The number of slots separating the sides of a coil', 'The number of groups of coils', 'The number of degrees they are apart', 'How far the coil protrudes from the slots.'],
      answer: 'The number of slots separating the sides of a coil'
  },

  {
      question: 'In a split phase motor, the running winding should have:',
      options: ['high resistance and low inductance', 'low resistance and high inductance', 'high resistance as well as high inductance', 'low resistance as well as low inductance'],
      answer: 'high resistance and low inductance'
    },
    {
      question: 'On a split-phase induction motor, why is there more current on the initial start than after it is running?',
      options: ['the windings are in parallel', 'the windings are in series', 'it has the same amount of windings in the start as run windings', 'it has more windings in the start winding than the run'],
      answer: 'it has more windings in the start winding than the run'
    },
    {
      question: 'Direction of rotation of a split phase motor can be reversed by reversing the connection of:',
      options: ['running winding only', 'starting winding only', 'either (a) or (b)', 'both (a) and (b)'],
      answer: 'either (a) or (b)'
    },
    {
      question: 'In a split phase motor, which winding is connected through a centrifugal switch?',
      options: ['the starting winding', 'the running winding', 'both starting and running windings', 'centrifugal switch is used to control supply voltage'],
      answer: 'the starting winding'
    },
    {
      question: 'In split-phase motor auxiliary winding is of:',
      options: ['thick wire placed at the bottom of the slots', 'thick wire placed at the top of the slots', 'thin wire placed at the top of the slots', 'thin wire placed at the bottom of the slots'],
      answer: 'thin wire placed at the top of the slots'
    },

    {
      question: 'In a capacitor start and run motors the function of the running capacitor in series with the auxiliary winding is to',
      options: [
        'improve power factor',
        'increase overload capacity',
        'reduce fluctuations in torque',
        'to improve torque'
      ],
      answer: 'improve power factor'
    },
    {
      question: 'If a capacitor-start motor (without a load) hums but does not run, suspect:',
      options: [
        'grounded winding',
        'shorted winding',
        'overload',
        'defective capacitor'
      ],
      answer: 'grounded winding'
    },
    {
      question: 'In a capacitor -start motor, what helps to prevent the motor from drawing too much current?',
      options: [
        'the overload device',
        'the centrifugal switch',
        'the extra set contact points',
        'the fuse'
      ],
      answer: 'the centrifugal switch'
    },
    {
      question: 'How does a capacitor-start motor differ from a split-phase motor?',
      options: [
        'capacitor is connected in series parallel with start winding',
        'capacitor is added in series with centrifugal switch',
        'capacitor is connected in parallel with the start winding',
        'capacitor is added in parallel with centrifugal switch'
      ],
      answer: 'capacitor is connected in parallel with the start winding'
    },
    {
      question: 'In a capacitor start single-phase motor, when capacitor is replaced by a Resistance',
      options: [
        'torque will increase',
        'the motor will consume less power',
        'motor will run in reverse direction',
        'motor will continue to run in same direction'
      ],
      answer: 'motor will continue to run in same direction'
    },
    {
      question: 'Locked rotor current of a shaded pole motor is',
      options: ['equal to full load current', 'less than full load current', 'slightly more than full load current', 'several times the full load current'],
      answer: 'slightly more than full load current'
    },
    {
      question: 'A shaded pole motor does not possess',
      options: ['centrifugal switch', 'capacitor', 'commutator', 'all of the above'],
      answer: 'all of the above'
    },
    {
      question: 'The shaded pole motor is used for',
      options: ['high starting torque', 'low starting torque', 'medium starting torque', 'very high starting torque'],
      answer: 'low starting torque'
    },
    {
      question: 'In case of a shaded pole motor the direction of rotation of the motor is',
      options: ['from main pole to shaded pole', 'from shaded pole to main pole', 'either of the above depending on voltage', 'either of the above depending on power factor'],
      answer: 'from main pole to shaded pole'
    },
    {
      question: 'A shaded pole motor can be used for',
      options: ['toys', 'hair dryers', 'circulators', 'any of the above'],
      answer: 'any of the above'
    },
    {    question: 'The speed of a universal motor is usually reduced by using',    options: ['gearing', 'belts', 'brakes', 'chains'],
    answer: 'gearing',
  },
  {
    question: 'The speed control of universal motor used for sewing machines is by',
    options: ['friction', 'varying the resistance', 'tapping the field', 'centrifugal mechanism'],
    answer: 'varying the resistance',
  },
  {
    question: 'A universal motor is one which',
    options: ['can be operated either on D.C. or A.C. supply at approximately the same speed and output', 'can be marketed internationally', 'runs at dangerously high speed on no-load'],
    answer: 'can be operated either on D.C. or A.C. supply at approximately the same speed and output',
  },
  {
    question: 'In a A.C. series motor armature coils are usually connected to commutator',
    options: ['through resistance', 'through reactances', 'through capacitors', 'solidly'],
    answer: 'through resistance',
  },
  {
    question: 'The direction of rotation of universal motor can be reversed the by reversing the flow of current through',
    options: ['armature winding', 'field winding', 'either armature winding or field winding', 'none of the above'],
    answer: 'either armature winding or field winding',
  },
  {
    question: 'Which of the following statements regarding repulsion-start induction motor is incorrect?',
    options: ['It requires more maintenance of commutator and other mechanical devices', 'It makes quite a bit of noise on starting', 'In fractional horse power motors, it has replaced the capacitor motors', 'It is not easily reversed'],
    answer: 'In fractional horse power motors, it has replaced the capacitor motors'
  },
  {
    question: 'The repulsion-start induction-run motor is used because of',
    options: ['good power factor', 'high efficiency', 'minimum cost', 'high starting torque'],
    answer: 'high starting torque'
  },
  {
    question: 'How is the neutral point located if it is not marked on the case of repulsion-start induction motors?',
    options: ['motor will run in counterclockwise direction only', 'motor will run in clockwise direction only', 'motor will not run in either direction', 'motor will over speed'],
    answer: 'motor will not run in either direction'
  },
  {
    question: 'Open armature coils will cause the repulsion motor to:',
    options: ['burn out fuses', 'spark internally', 'hum but not run', 'become excessively hot'],
    answer: 'spark internally'
  },
  {
    question: 'A repulsion motor is equipped with',
    options: ['slip rings', 'commutator', 'both (a) and (b)', 'none of the above'],
    answer: 'commutator'
  },
  {
    question: 'Which of the following statements regarding a reluctance motor is incorrect?',
    options: ['It cannot be reversed, ordinarily', 'It requires no D.C. field excitation for its operation', 'It is nothing else but a single-phase, salient pole synchronous-induction motor', 'Its squirrel cage-rotor is of unsymmetrical magnetic construction in order to vary reluctance path between stator and rotor'],
    answer: 'It cannot be reversed, ordinarily'
  },
  {
    question: 'Which of the applications in a reluctance motor is preferred?',
    options: ['Electric shavers', 'Refrigerators', 'Signaling and timing devices', 'Lifts and hoists'],
    answer: 'Signaling and timing devices'
  },
  {
    question: 'In case of a reluctance motor, when the load is increased so that it cannot maintain synchronous speed the motor will',
    options: ['become unstable', 'draw excessive armature current and may burn out', 'fall out of synchronism and come to stand still', 'run as induction motor'],
    answer: 'run as induction motor'
  },
  {
    question: 'Which of the following statements regarding reluctance-start motor is incorrect?',
    options: ['It is similar to reluctance motor', 'It is basically an induction motor and not a synchronous one', 'So far as its basic working principle is concerned, it is similar to shaded pole motor', 'the air-gap between rotor and salient poles is non- uniform'],
    answer: 'It is similar to reluctance motor'
  },
  {
    question: 'A reluctance motor',
    options: ['is self-starting', 'is constant speed motor', 'needs no D.C. excitation', 'all of the above'],
    answer: 'all of the above'
  },
    ];
    
    const QuizModuleB = ({ navigation }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    
    const handleAnswerButtonClick = (answerOption) => {
        if (answerOption === questions[currentQuestion].answer) {
            setScore(score + 1);
          } else {
            // Display the correct answer
            alert(`Incorrect. The correct answer is ${questions[currentQuestion].answer}`);
          }
          const nextQuestion = currentQuestion + 1;
          if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
          } else {
            setShowScore(true);
          }
};

    return (
    <View style={styles.container}>
    {showScore ? (
    <View style={styles.scoreContainer}>
    <Text style={styles.scoreText}>You scored {score} out of {questions.length}</Text>
    <Buttons title="BACK TO MODULE" onPress={() => navigation.navigate('ModuleScreenB')} />
    </View>
    ) : (
    <View>
    <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
    {questions[currentQuestion].options.map((option, index) => (
    <TouchableOpacity
    key={index}
    style={styles.button}
    onPress={() => handleAnswerButtonClick(option)}
    >
    <Text style={styles.buttonText}>{option}</Text>
    </TouchableOpacity>
    ))}
    </View>
    )}
    </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    },
    scoreContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    scoreText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
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
    });

export default QuizModuleB;
