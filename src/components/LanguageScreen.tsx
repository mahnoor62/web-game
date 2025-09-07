'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Languages } from 'lucide-react';

interface LanguageScreenProps {
  onLanguageSelect: (language: 'english' | 'arabic') => void;
}

export function LanguageScreen({ onLanguageSelect }: LanguageScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-full flex flex-col justify-center items-center p-8 text-center"
    >
      <div className="max-w-md mx-auto">
        {/* Language Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          {/* <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-[#C8102E] rounded-full flex items-center justify-center mx-auto mb-6">
          <img 
    src="/logo.png"   // place your logo inside public folder
    alt="Logo"
    className="w-50 h-50 object-contain"
  /> */}
            {/* <Globe className="w-10 h-10 text-white" /> */}
          {/* </div> */}
          <h1 className="text-4xl font-bold text-white mb-2 font-arabic">
            اختر لغتك 
            {/* اختر لغتك المفضلة */}
          </h1>
          <p className="text-white/80 text-base">
            Choose Your Language
          </p>
        </motion.div>

        {/* Language Options */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <Button
            onClick={() => onLanguageSelect('english')}
            className="w-full h-16 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg border-2 border-white/20"
          >
            {/* <Languages className="w-5 h-5 mr-3" /> */}
            English
          </Button>
          
          <Button
            onClick={() => onLanguageSelect('arabic')}
            className="w-full h-16 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-105 no-select text-lg font-arabic"
          >
            {/* <Languages className="w-5 h-5 mr-3" /> */}
            العربية
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
