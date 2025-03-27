import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const TechProblemSolvingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      problem: "How do streaming services recommend films?",
      options: [
        "Random selection of films",
        "Analysing user's viewing history and preferences",
        "Showing only the most expensive films",
        "Picking films based on actor popularity"
      ],
      correctAnswer: "Analysing user's viewing history and preferences",
      explanation: "Streaming services use sophisticated algorithms that analyse your past viewing choices, identifying patterns to recommend content that matches your tastes."
    },
    {
      problem: "What technology enables autocorrect features?",
      options: [
        "Simple spell-checking",
        "Manual human editing",
        "Predictive text algorithms with language data",
        "Random word substitution"
      ],
      correctAnswer: "Predictive text algorithms with language data",
      explanation: "Autocorrect uses advanced algorithms that learn from vast amounts of language data, understanding context and predicting likely words based on typing patterns."
    },
    {
      problem: "How do virtual assistants process voice commands?",
      options: [
        "They record all conversations",
        "Using natural language processing (NLP)",
        "Guessing based on random keywords",
        "Manually translating each command"
      ],
      correctAnswer: "Using natural language processing (NLP)",
      explanation: "Virtual assistants use NLP to break down speech into recognisable patterns, convert voice to text, analyse intent, and retrieve relevant information."
    }
  ];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  if (showScore) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-centre">
            <p className="text-2xl font-bold mb-4">
              You scored {score} out of {questions.length}
            </p>
            <Button onClick={resetQuiz} className="mt-4">
              Retake Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Technology Problem-Solving Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-lg font-semibold mb-2">
            {questions[currentQuestion].problem}
          </p>
          <RadioGroup onValueChange={handleAnswerSelect}>
            {questions[currentQuestion].options.map((option, index) => (
              <div 
                key={index} 
                className={`flex items-centre space-x-2 mb-2 p-2 rounded ${
                  selectedAnswer && 
                  option === selectedAnswer && 
                  option !== questions[currentQuestion].correctAnswer
                    ? 'bg-red-100 border-2 border-red-300' 
                    : ''
                }`}
              >
                <RadioGroupItem 
                  value={option} 
                  id={`option-${index}`}
                  checked={selectedAnswer === option}
                />
                <Label htmlFor={`option-${index}`}>
                  {option}
                  {selectedAnswer && 
                    selectedAnswer !== questions[currentQuestion].correctAnswer && 
                    option === questions[currentQuestion].correctAnswer && 
                    ' ✓'}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        {selectedAnswer && (
          <div className={`mt-4 p-3 rounded ${
            selectedAnswer === questions[currentQuestion].correctAnswer 
              ? 'bg-green-200' 
              : 'bg-red-200'
          }`}>
            <p className="font-bold">
              {selectedAnswer === questions[currentQuestion].correctAnswer 
                ? "Correct!" 
                : "Incorrect."}
            </p>
            <p className="mt-2">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}
        <Button 
          onClick={handleNextQuestion} 
          disabled={!selectedAnswer} 
          className="mt-4 w-full"
        >
          {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
        </Button>
        <div className="mt-2 text-centre text-sm">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechProblemSolvingQuiz;
