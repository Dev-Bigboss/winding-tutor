import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Buttons from '../constants/Buttons';

const screenWidth =  Dimensions.get('window').width;
const questions = [  {
    question: "What are the consequences of incorrect data, when working on a motor?",
    options: [
      "The motor would run counter-clockwise",
      "If the windings are in the wrong location, a motor may not start properly",
      "You remember how it's done, so you don't need the data",
      "The motor would run too slowly"
    ],
    answer: "If the windings are in the wrong location, a motor may not start properly"
  },
  {
    question: "Why is the term 'end room' important, when taking data on a motor?",
    options: [
      "Only because of the run winding",
      "Only because of the start winding",
      "Because the end plates may press against the coils and cause a short",
      "Because of insulation paper"
    ],
    answer: "Because the end plates may press against the coils and cause a short"
  },
  {
    question: "What information would you put on your data sheet if the start winding on a motor was shorted?",
    options: [
      "Don't put anything on the data sheet",
      "Put just the start winding on the information sheet",
      "Put just the run winding on the data",
      "Put both the run windinga and start winding information"
    ],
    answer: "Put just the start winding on the information sheet"
    },
    {
      question: 'What is meant by the pitch of a coil on a motor?',
      options: ['The number of slots separating the sides of a coil', 'The number of groups of coils', 'The number of degrees they are apart', 'How far the coil protrudes from the slots.'],
      answer: 'The number of groups of coils'
  },

  {
      question: 'When is the proper time to start recording data for single-phase motor? ',
      options: ['just when the instructor is watching ', 'after it is completed', 'as soon as you put it on the work bench', 'not necessary'],
      answer: 'as soon as you put it on the work bench'
    },
    {
        question: 'If only the start winding on a motor is to be changed, you should:',
        options: ['cut one end of each coil and pull', 'change both start and run windings', 'lift out the start winding and remove the wedges with a hacksaw', 'remove the wedges and lift out the start winding'],
        answer: 'remove the wedges and lift out the start winding'
      },
      {
        question: 'How much heat is needed to burn the stator on a motor?',
        options: ['the stator is made to withstand any temperature', 'approximately 200 degrees', 'approximately 100 degrees', 'approximately 400 degrees'],
        answer: 'approximately 400 degrees'
      },
      {
        question: 'While stripping the stator on a motor, should you check wire size?',
        options: ['yes, you have to determine new winding sizes', 'no, anyone can guess the wire size', 'sometimes you should just in case you lose the stator', 'never, it\'s not that important'],
        answer: 'yes, you have to determine new winding sizes'
      },
      {
        question: 'One method of stripping a stator is to:',
        options: ['cut both sides off', 'cut each coil on one side and pull the coil out the other', 'cut each coil on one side and pull'],
        answer: 'cut each coil on one side and pull the coil out the other'
      },
      {
        question: 'When stripping a motor, why should one coil be saved?',
        options: ['to be reused when the motor is rebuilt', 'to provide the dimensions for the new coils', 'because the new coils must be wound in reverse of the old ones', 'to provide a guide for installing the new coils'],
        answer: 'to provide a guide for installing the new coils'
      },
      {      question: "The best procedure to follow when re insulating a core on a motor is to:",      options: [        "It isn't necessary to re insulate the core",        "Replace it with thinner insulation than was originally used",        "Replace it with thicker insulation than was originally used",        "Replace it with the same type and thickness of insulation as used in the original winding"      ],
      answer: "Replace it with the same type and thickness of insulation as used in the original winding"
    },
    {
      question: "Which of the following ways of winding will produce the tightest winding possible?",
      options: [
        "Skein",
        "Form winding",
        "Motor winding",
        "Hand winding"
      ],
      answer: "Hand winding"
    },
    {
      question: "What is one of the primary advantages of skein winding over other types of winding in a split phase motor?",
      options: [
        "Less power will be used when operating the motor",
        "Higher voltage is obtained",
        "Lower voltage is obtained",
        "Many conductors may be placed in the slot at one time"
      ],
      answer: "Many conductors may be placed in the slot at one time"
    },
    {
      question: "Before dipping, the stator from a motor should be placed in a baking oven for:",
      options: [
        "10 minutes",
        "45 minutes",
        "60 minutes",
        "30 minutes"
      ],
      answer: "45 minutes"
    },
    {
      question: "When do you varnish the new windings in a stator of a motor?",
      options: [
        "After installing the windings in the stator and before installing flexible leads",
        "After installing the windings, completing a test and installing flexible leads",
        "After installing the windings in the stator",
        "Before installing the windings in the stator"
      ],
      answer: "After installing the windings, completing a test and installing flexible leads"
    },
    {
      question: "What will help decrease the moisture content in the windings of a stator on a motor?",
      options: [
        "Dripping",
        "Baking",
        "Varnishing",
        "Baking and varnishing"
      ],
      answer: "Baking and varnishing"
    },
    {
      question: "Immediately after removing the stator of a motor from the varnish dip tank, the stator is placed in the oven:",
      options: [
        "Just before it stops dripping",
        "Just after it stops dripping",
        "Yes",
        "No"
      ],
      answer: "Just after it stops dripping"
    }
    ];
    
    const QuizModuleC = ({ navigation }) => {
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

export default QuizModuleC;
