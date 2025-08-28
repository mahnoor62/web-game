'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Trophy, Star } from 'lucide-react';
import Confetti from 'react-confetti';

interface RewardProps {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  language: 'english' | 'arabic';
}

export function Reward({ isOpen, onClose, onReset, language }: RewardProps) {
  const isArabic = language === 'arabic';
  
  const content = {
    title: isArabic ? 'تهانينا!' : 'Congratulations!',
    message1: isArabic 
      ? 'لقد أنهيت رحلة التمويل بنجاح!'
      : 'You\'ve successfully completed your financing journey!',
    message2: isArabic 
      ? 'الوطنية للتمويل تجعل حلمك واقعًا.'
      : 'National Finance is here to help make your dreams come true.',
    prizeTitle: isArabic ? 'تهانينا!' : 'Congratulations!',
    prizeText: isArabic ? 'اكتشف جائزتك الآن.' : 'Unlock your prize now.',
    buttonText: isArabic ? 'رائع!' : 'Awesome!'
  };

  const handleAwesomeClick = () => {
    onClose();
    onReset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
<DialogContent className="reward-popup quiz-card border-0 p-0 overflow-hidden mx-auto">


      {/* <DialogContent className="dialogue quiz-card border-0 p-0 overflow-hidden max-w-md mx-auto"> */}
        <div className="relative">
          {/* Confetti */}
          <Confetti
            width={400}
            height={500}
            recycle={false}
            numberOfPieces={200}
            colors={['#8B5CF6', '#EC4899', '#F59E0B', '#10B981']}
          />
          
          {/* Content */}
          <div className="p-8 text-center relative z-10" dir={isArabic ? 'rtl' : 'ltr'}>
            {/* Trophy Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
              className="mb-6"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-[#C8102E] rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {content.title}
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                {content.message1}
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                {content.message2}
              </p>
            </motion.div>

            {/* Prize Unlock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-blue-600/20 to-[#C8102E]/20 rounded-xl p-4 border border-blue-600/30">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-semibold">{content.prizeTitle}</span>
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-white/90 text-sm">
                  {content.prizeText}
                </p>
              </div>
            </motion.div>

            {/* Close Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                onClick={handleAwesomeClick}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg"
              >
                {content.buttonText}
              </Button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
