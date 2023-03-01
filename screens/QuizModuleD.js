import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Buttons from '../constants/Buttons';

const screenWidth =  Dimensions.get('window').width;
const questions = [ {
    question: "Burning out of winding is due to",
    options: ["short circuited capacitor", "capacitor value having changed", "open circuiting of capacitor", "none of the above"],
    answer: "short circuited capacitor"
  },
  {
    question: "The running winding of a single phase motor on testing with meggar ohmmeter is found to be grounded. Most probable location of the ground will be",
    options: ["at the end connections", "at the end terminals", "anywhere on the winding inside a slot", "at the slot edge where coil enters or comes out of the slot"],
    answer: "anywhere on the winding inside a slot"
  },
  {
    question: "The _________ is the stationary winding of the electric motor.",
    options: ["stator", "shaft", "rotor", "armature"],
    answer: "stator"
  },
  {
    question: "Which of the following is a rule of safe dress around electric motors?",
    options: ["Wear Safety Glasses", "Remove Loose Items", "Tie Up Long Hair", "All of these"],
    answer: "All of these"
  },
  {
    question: "Torque is developed in an electric motor because of ________",
    options: ["gravity", "interaction of different magnetic fields", "inertia", "kinetic energy"],
    answer: "interaction of different magnetic fields"
  },
  {
    question: "On a motor, the number of slots separating the sides of a coil, including the slots in which the winding lies, is called:",
    options: ["turns", "pitch", "slots", "end room"],
    answer: "pitch"
  },
  {
    question: 'How is the span of a coil in a motor recorded?',
    options: ['a pencil or pen', 'not necessary', '1-4 or 2-6 or as the case may be', '1-32 or 2-36 as the case may be'],
    answer: '1-4 or 2-6 or as the case may be'
  },
  {
    question: 'When working on a motor, how do you get information on the number of turns of wire?',
    options: ['you guess at it', 'it is stamped on the frame', 'you count each coil', 'it is stamped on data plate'],
    answer: 'it is stamped on data plate'
  },
  {
    question: 'While striping the stator on a motor, why is it important to count the turns of wire, and number of coils per pole?',
    options: ['to check the manufacturer\'s specifications', 'to get it on the data card, so when it is rewound, it will have the same number of turns per pole', 'to guard against a change in polarity', 'because when it is rewound, it should have per pole than are unwound'],
    answer: 'to get it on the data card, so when it is rewound, it will have the same number of turns per pole'
  },
  {
    question: 'What type of insulation is used when re-insulating a core on a motor because it is resistant to high temperature and has high tensile strength?',
    options: ['rag-stock paper', 'mylar combination', 'nylon paper', 'dacron-mylar'],
    answer: 'mylar combination'
  },
  {
    question: 'When varnishing a motor, what type of varnish does not require baking?',
    options: ['orange varnish', 'resin varnish', 'air drying varnish', 'polyester varnish'],
    answer: 'air drying varnish'
  },
  {
    question: 'How many kinds of single phase windings are present?',
    options: ['2', '3', '4', '5'],
    answer: '4'
  },
  {
    question: 'What is the form of the progressive windings?',
    options: ['double layer diamond coil windings', 'single layer diamond coil windings', 'multi layer diamond coil windings', 'three layer diamond coil windings'],
    answer: 'single layer diamond coil windings'
  },
  {
    question: 'When is the skein winding made use of?',
    options: ['when small amount of relatively small size wire is used', 'when large amount of relatively small size wire is used', 'when large amount of relatively large size wire is used', 'when small amount of relatively large size wire is used'],
    answer: 'when small amount of relatively small size wire is used'
  },
  {
    question: 'What kind of motor employs the skein winding made use of?',
    options: ['maximum horse power single phase induction motor', 'fractional horse power single phase induction motor', 'minimum horse power single phase induction motor', 'zero horse power single phase induction motor'],
    answer: 'fractional horse power single phase induction motor'
  },
  {
    question: 'Which winding is mostly used winding in the single phase induction motor?',
    options: ['circular winding', 'concentric winding', 'progressive winding', 'skein winding'],
    answer: 'concentric winding'
  },
  {
    question: 'What is/are the advantages of the skein winding?',
    options: ['low cost to wind', 'low cost to insert', 'permits some freedom of choice of distribution', 'low cost to wind, low cost to insert, permits some freedom of choice of distribution'],
    answer: 'low cost to wind, low cost to insert, permits some freedom of choice of distribution'
  }
    ];
    
    const QuizModuleD = ({ navigation }) => {
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
    <Buttons title="BACK TO MODULE" onPress={() => navigation.navigate('ModuleScreenC')} />
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

export default QuizModuleD;
