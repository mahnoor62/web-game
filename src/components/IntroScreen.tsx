'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
  language: 'english' | 'arabic';
}

export function IntroScreen({ onStart, language }: IntroScreenProps) {
  const isArabic = language === 'arabic';
  
  const content = {
    title: isArabic ? 'الوطنية للتمويل' : 'National Finance',
    subtitle: isArabic ? 'تحدي رحلة التمويل' : 'The Financing Journey Challenge',
    description: isArabic 
      ? 'انطلق في رحلة فريدة مع الوطنية للتمويل، لاكتشاف التمويل الأمثل وتحقيق أحلامك!'
      : 'Start a unique journey with National Finance to discover the ideal financing solution and turn your dreams into reality!',
    buttonText: isArabic ? 'ابدأ رحلتك' : 'Start Your Journey'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-full flex flex-col justify-center items-center p-8 text-center"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="max-w-md mx-auto">
        {/* Company Logo/Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-2xl font-bold">NF</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">
            {content.title}
          </h1>
          <h2 className="text-xl font-semibold text-white/90 mb-6">
            {content.subtitle}
          </h2>
        </motion.div>

        {/* Introduction Text */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-white/90 text-lg leading-relaxed mb-6">
            {content.description}
          </p>
        </motion.div>

        {/* Start Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={onStart}
            className="w-full h-16 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg"
          >
            {content.buttonText}
            <ArrowRight className={`w-5 h-5 ${isArabic ? 'ml-0 mr-3 rotate-180' : 'ml-3'}`} />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
