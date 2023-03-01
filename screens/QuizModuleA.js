import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Buttons from '../constants/Buttons';

const screenWidth =  Dimensions.get('window').width;
const questions = [  {    question: 'A single-phase induction motor is:',    options: ['inherently self-starting with high torque', 'inherently self-starting with low torque', 'inherently non-self-starting with low torque', 'inherently non-self-starting with high torque'],
    answer: 'inherently non-self-starting with low torque'
  },
  {
    question: 'Single phase induction motor usually operates on:',
    options: ['0.6 power factor lagging', '0.8 power factor lagging', '0.8 power factor leading', 'unity power factor'],
    answer: '0.8 power factor lagging'
  },
  {
    question: 'Induction motor is preferred over synchronous motor due to___________',
    options: ['no requirement of dc supply', 'starting problems', 'sensitive to environment', 'all of the mentioned'],
    answer: 'no requirement of dc supply'
  },
  {
    question: 'Which of the following can be done using a synchronous motor but not by induction motor?',
    options: ['Power factor improvement', 'Supplying mechanical load', 'Power factor improvement and supply mechanical load', 'None of the mentioned'],
    answer: 'Power factor improvement and supply mechanical load'
  },
  {
    question: 'The torque in an induction motor varies as ______ and in synchronous motor as _________',
    options: ['square of voltage, proportion to voltage', 'proportion to voltage, proportion to voltage', 'proportion to voltage, square of voltage', 'square of voltage, square of voltage'],
    answer: 'proportion to voltage, square of voltage'
  },
  {
    question: 'The frame of an induction motor is usually made of:',
    options: ['silicon steel', 'cast iron', 'aluminium', 'bronze'],
    answer: 'cast iron'
  },
  {
    question: 'How many steps are involved in the construction of single phase induction motor?',
    options: ['3', '4', '5', '6'],
    answer: '4'
  },
  {
    question: 'What is the lamination used for the stator?',
    options: ['cast iron', 'die cast aluminium alloy frame', 'cast iron or die cast aluminium alloy frame', 'cast iron and die cast aluminium alloy frame'],
    answer: 'cast iron or die cast aluminium alloy frame'
  },
  {
    question: 'What type of coils is used for winding the single phase induction motor generally?',
    options: ['rectangular coils', 'square coils', 'cruciform coils', 'circular coils'],
    answer: 'circular coils'
  },
  {
    question: 'How many are the poles and pitches in the concentric windings?',
    options: ['single pole, different pitches', 'different pole, different pitches', 'different pole, single pitch', 'single pole, single pitch'],
    answer: 'different pole, different pitches'
  },
  {
    question: 'What material is used in the tunnel of the rotor of the single phase induction motor?',
    options: ['aluminium', 'copper', 'steel', 'wood'],
    answer: 'aluminium'
  },
  {
    question: 'What type of operations is used in the starting switches?',
    options: ['mechanical operation', 'electrical operation', 'centrifugal operation and mechanical operation', 'centrifugal operation and electrical operation'],
    answer: 'centrifugal operation and electrical operation'
    },
    {
    question: 'The ac electrolytic capacitor is formed by winding two sheets of etched aluminium foil',
    options: ['true', 'false'],
    answer: 'true'
    },
    {
    question: 'The electrolytic capacitor and insulator unit is impregnated using ethylene glycol or a derivative',
    options: ['true', 'false'],
    answer: 'true'
    },
    {
    question: 'What is the range of power rating for single-phase induction motors?',
    options: ['Less than 1 kW', 'Between 1 kW and 10 kW', 'Between 10 kW and 100 kW', 'Greater than 100 kW'],
    answer: 'Less than 1 kW'
    },
    {
    question: 'What is the range of the power factor of electrolytic capacitors?',
    options: ['2-4', '4-6', '6-8', '7-9'],
    answer: '6-8'
    },
    {
    question: 'The starting winding of a single-phase motor is placed in',
    options: ['armature', 'field', 'rotor', 'stator'],
    answer: 'stator'
    },
    {
    question: 'Which of the following motors is used in tape-recorders? ',
    options: ['Hysteresis motor', 'Reluctance motor', 'Capacitor-run motor', 'Universal motor'],
    answer: 'Hysteresis motor'
    },
    {
    question: 'A single phase induction motor runs slower than normal, the most likely defect is',
    options: ['worn bearings ', 'short-circuit in the winding', 'open-circuit in the winding', 'none of the above'],
    answer: 'worn bearings '
    },
    {
    question: 'In capacitor start single-phase motors ',
    options: ['current in the starting winding leads the voltage', 'current in the starting winding lags the voltage ', 'current in the starting winding is in phase with voltage in running winding ', 'none of the above'],
    answer: 'current in the starting winding leads the voltage'
    },
    ];
    
    const QuizModuleA = ({ navigation }) => {
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
    <Buttons title="BACK TO MODULE" onPress={() => navigation.navigate('ModuleScreenA')} />
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

export default QuizModuleA;
