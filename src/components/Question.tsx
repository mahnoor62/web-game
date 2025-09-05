'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, ArrowLeft, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '@/types/quiz';

interface QuestionProps {
  question: QuizQuestion;
  selectedAnswer: string | null;
  onAnswerSelect: (answerId: string) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
  showFeedback: boolean;
  language: 'english' | 'arabic';
}

export function Question({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onBack,
  isFirst,
  isLast,
  showFeedback,
  language
}: QuestionProps) {
  const isArabic = language === 'arabic';
  const selectedOption = question.options.find(option => option.id === selectedAnswer);

  const buttonText = {
    back: isArabic ? 'رجوع' : 'Back',
    next: isArabic ? 'التالي' : 'Next',
    finish: isArabic ? 'إنهاء' : 'Finish'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: isArabic ? 20 : -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full h-full flex flex-col justify-center p-6"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="quiz-card max-w-md mx-auto w-full p-6 rounded-2xl shadow-xl">
        {/* Question */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h2 
            className="text-2xl font-bold text-white mb-6 text-center"
            style={isArabic ? { wordSpacing: '0.3em' } : {}}
          >
            {question.question}
          </h2>
        </motion.div>

        {/* Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2 mb-8"
        >
          {question.options.map((option, index) => (
            <motion.button
            key={option.id}
            onClick={() => onAnswerSelect(option.id)}
            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center no-select
              ${isArabic ? 'flex-row-reverse text-right' : 'flex-row text-left'}
              ${
                selectedAnswer === option.id
                  ? 'border-blue-600 bg-blue-600/20 shadow-lg'
                  : 'border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          >
            
            <span 
              className="text-white font-medium flex-1"
              style={isArabic ? { wordSpacing: '0.3em' } : {}}
            >
              {option.text}
            </span>
            {selectedAnswer === option.id ? (
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 ml-3" />
            ) : (
              <Circle className="w-5 h-5 text-white/60 flex-shrink-0 ml-3" />
            )}
          </motion.button>
          
            // <motion.button
            //   key={option.id}
            //   onClick={() => onAnswerSelect(option.id)}
            //   className={`w-full p-4 rounded-xl border-2 transition-all duration-200 flex items-center no-select ${
            //     isArabic ? 'text-right flex-row-reverse space-x-reverse space-x-3' : 'text-left flex-row-reverse space-x-reverse space-x-3'
            //   } ${
            //     selectedAnswer === option.id
            //       ? 'border-blue-600 bg-blue-600/20 shadow-lg'
            //       : 'border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50'
            //   }`}
            //   whileHover={{ scale: 1.02 }}
            //   whileTap={{ scale: 0.98 }}
            //   initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
            //   animate={{ opacity: 1, x: 0 }}
            //   transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            // >
            //   {selectedAnswer === option.id ? (
            //     <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
            //   ) : (
            //     <Circle className="w-5 h-5 text-white/60 flex-shrink-0" />
            //   )}
            //   <span className={`text-white font-medium flex-1 ${isArabic ? 'text-right' : 'text-right'}`}>{option.text}</span>
            // </motion.button>
          ))}
        </motion.div>

        {/* Feedback */}
        {showFeedback && selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 p-4 bg-gradient-to-r from-blue-600/20 to-[#C8102E]/20 rounded-xl border border-blue-600/30"
          >
            <p className="text-white/90 text-sm leading-relaxed">
              {selectedOption.feedback}
            </p>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex space-x-4"
        >
          {!isFirst && (
            <Button
              onClick={onBack}
              variant="outline"
              className="flex-1 h-12 border-white/30 text-white hover:bg-white/10 no-select"
            >
              <ArrowLeft className={`w-4 h-4 ${isArabic ? 'ml-2 rotate-180' : 'mr-2'}`} />
              {buttonText.back}
            </Button>
          )}
          
          <Button
            onClick={onNext}
            disabled={!selectedAnswer}
            className={`flex-1 h-12 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select ${
              !selectedAnswer ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLast ? buttonText.finish : buttonText.next}
            <ArrowRight className={`w-4 h-4 ${isArabic ? 'mr-2 rotate-180' : 'ml-2'}`} />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
