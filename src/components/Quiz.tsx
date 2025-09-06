'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from './Question';
import { Reward } from './Reward';
import { QuizGoal, QuizStage, QuizQuestion } from '@/types/quiz';
import { 
  quizGoals, 
  quizStages, 
  quizQuestions,
  quizGoalsArabic,
  quizStagesArabic,
  quizQuestionsArabic
} from '@/data/questions';

interface QuizProps {
  goals: QuizGoal[];
  stages: QuizStage[];
  questions: QuizQuestion[];
  onReset: () => void;
  onBackToBeforeBegin: () => void;
  language: 'english' | 'arabic';
}

export function Quiz({ goals, stages, questions, onReset, onBackToBeforeBegin, language }: QuizProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showReward, setShowReward] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Get current question based on stage and goal
  const currentQuestion = useMemo(() => {
    const stage = stages[currentStage];
    if (!stage) return null;

    // For goal selection stage, return the goal question
    if (stage.id === 'goal') {
      return questions.find(q => q.stage === 'goal');
    }

    // For other stages, find question that matches current stage and goal
    return questions.find(q => 
      q.stage === stage.id && 
      (q.goal === selectedGoal || q.goal === undefined)
    );
  }, [currentStage, selectedGoal, stages, questions]);

  // Get filtered questions for current goal
  const filteredQuestions = useMemo(() => {
    if (!selectedGoal) return [];
    return questions.filter(q => 
      q.stage !== 'goal' && 
      (q.goal === selectedGoal || q.goal === undefined)
    );
  }, [selectedGoal, questions]);

  const isFirst = currentStage === 0;
  const isLast = currentStage === stages.length - 1;

  const handleAnswerSelect = (answerId: string) => {
    if (!currentQuestion) return;
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerId
    }));

    // Show feedback after a short delay
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (!currentQuestion) return;

    // If this is the goal selection stage, set the selected goal
    if (currentQuestion.stage === 'goal') {
      const selectedOption = currentQuestion.options.find(opt => opt.id === answers[currentQuestion.id]);
      if (selectedOption) {
        setSelectedGoal(selectedOption.id);
      }
    }

    // Move to next stage
    if (isLast) {
      setShowReward(true);
    } else {
      setCurrentStage(prev => prev + 1);
      setShowFeedback(false);
    }
  };

  const handleBack = () => {
    if (isFirst) {
      // If it's the first question, go back to Before You Begin screen
      onBackToBeforeBegin();
      return;
    }
    setCurrentStage(prev => prev - 1);
    setShowFeedback(false);
  };

  const handleRewardClose = () => {
    setShowReward(false);
  };

  const handleRewardBack = () => {
    setShowReward(false);
    // Go back to the last question
    setCurrentStage(stages.length - 1);
    setShowFeedback(false);
  };

  if (!currentQuestion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white">
          {language === 'arabic' ? 'جاري التحميل...' : 'Loading...'}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <AnimatePresence mode="wait">
        <Question
          key={currentQuestion.id}
          question={currentQuestion}
          selectedAnswer={answers[currentQuestion.id] || null}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onBack={handleBack}
          isFirst={isFirst}
          isLast={isLast}
          showFeedback={showFeedback}
          language={language}
        />
      </AnimatePresence>

      <Reward
        isOpen={showReward}
        onClose={handleRewardClose}
        onReset={onReset}
        onBack={handleRewardBack}
        language={language}
      />
    </div>
  );
}
