import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
        answer: 'Mercury'
      },{
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
        answer: 'Mercury'
      },{
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
        answer: 'Mercury'
      },{
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
      },
      {
        question: 'Which planet is closest to the Sun?',
        options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
        answer: 'Mercury'
      },
  // Add more questions here
];

export default function Assessment({ navigation }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerSelected = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    // check if the selected answer is correct
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    // go to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // reset the selected answer
    setSelectedAnswer(null);
  };

  const handleFinishAssessment = useCallback(() => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    Alert.alert(
      `Assessment complete! Your score is ${score}/${questions.length}`,
      "",
      [{ text: "OK", onPress: () => navigation.navigate('Homescreen') }],
      { cancelable: false }
    );
  }, [currentQuestionIndex, navigation, score, selectedAnswer]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && styles.selectedOptionButton,
            ]}
            onPress={() => handleAnswerSelected(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {currentQuestionIndex < questions.length - 1 ?
          (
            <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          ) :
          (
            <TouchableOpacity style={styles.nextButton} onPress={handleFinishAssessment}>
              <Text style={styles.nextButtonText}>Finish</Text>
            </TouchableOpacity>
          )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0039bc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:'#0039bc'
  },
  optionButton: {
    backgroundColor: '#0039bc',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#FFFFFF',
    color: '#0039bc',
  },
  optionText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0039bc',
  },
});