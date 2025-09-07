'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Trophy, Star, Gift, Sun, Speaker, Package, Glasses } from 'lucide-react';
import Confetti from 'react-confetti';
import { createPortal } from 'react-dom';
interface RewardProps {
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
  onBack?: () => void;
  language: 'english' | 'arabic';
  userName?: string;
}

interface Prize {
  id: string;
  name: string;
  nameArabic: string;
  icon: React.ComponentType<{ className?: string }>;
}

const prizes: Prize[] = [
  {
    id: 'sun-shade',
    name: 'Sun Shade',
    nameArabic: 'مظلة شمسية',
    icon: Glasses
  },
  {
    id: 'bluetooth-speaker',
    name: 'Bluetooth Speaker',
    nameArabic: 'مكبر صوت بلوتوث',
    icon: Speaker
  },
  {
    id: 'better-luck',
    name: 'Better luck next time!',
    // nameArabic: 'حظـاً أوفر في المرة القادمـة​\nرائـع!',
    nameArabic: '',
    
    icon: Package
  },
  {
    id: 'try-again',
    name: 'Better luck next time!',
    nameArabic: '',
    // nameArabic: 'حظـاً أوفر في المرة القادمـة​\nرائـع!',

    icon: Package
  },
  {
    id: 'try-again-2',
    name: 'Try again',
    nameArabic: 'حاول مرة أخرى',
    icon: Package
  }
];

export function Reward({ isOpen, onClose, onReset, onBack, language, userName }: RewardProps) {
  const isArabic = language === 'arabic';
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [showPrizePopup, setShowPrizePopup] = useState(false);
  const [openedBoxes, setOpenedBoxes] = useState<Set<number>>(new Set());
  const [boxPrizes, setBoxPrizes] = useState<Prize[]>([]);

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
    // buttonText: isArabic ? 'رائع!' : 'Awesome!',
    buttonText: isArabic ? '!رجوع' : 'Awesome!',
    backButtonText: isArabic ? '!رجوع' : 'Back',
    youWin: isArabic 
        ? `لقد ربحت ${userName || ''}` 
        : `You win ${userName || ''}`,
    selectBox: isArabic ? 'اختر صندوقًا' : 'Select a box',
    backButton: isArabic ? 'السابق' : 'Back'
  };

  // Initialize random prizes for boxes when dialog opens
  useEffect(() => {
    if (isOpen) {
      setSelectedBox(null);
      setWonPrize(null);
      setShowPrizePopup(false);
      setOpenedBoxes(new Set());
      
      // Create a selection with 60% chance to lose, 40% chance to win
      const winningPrizes = prizes.filter(prize => prize.id === 'sun-shade' || prize.id === 'bluetooth-speaker');
      const losingPrizes = prizes.filter(prize => prize.id !== 'sun-shade' && prize.id !== 'bluetooth-speaker');
      
      // 60% chance to get all losing prizes, 40% chance to get 1 winning prize
      const randomChance = Math.random();
      let selectedPrizes;
      
      if (randomChance <= 0.4) { // 40% chance to win
        // Select 1 winning prize and 2 losing prizes
        const selectedWinningPrize = [...winningPrizes].sort(() => Math.random() - 0.5).slice(0, 1);
        const selectedLosingPrizes = [...losingPrizes].sort(() => Math.random() - 0.5).slice(0, 2);
        selectedPrizes = [...selectedWinningPrize, ...selectedLosingPrizes];
      } else { // 60% chance to lose
        // Select all 3 losing prizes
        selectedPrizes = [...losingPrizes].sort(() => Math.random() - 0.5).slice(0, 3);
      }
      
      // Shuffle the selected prizes
      selectedPrizes = selectedPrizes.sort(() => Math.random() - 0.5);
      setBoxPrizes(selectedPrizes);
    }
  }, [isOpen]);

  const handleBoxClick = (boxIndex: number) => {
    if (openedBoxes.has(boxIndex)) return;
    
    setSelectedBox(boxIndex);
    setOpenedBoxes(prev => new Set([...prev, boxIndex]));
    
    // Get the prize for this box
    const prize = boxPrizes[boxIndex];
    setWonPrize(prize);
    
    // Show prize popup after a short delay
    setTimeout(() => {
      setShowPrizePopup(true);
    }, 2000);
  };

  // Check if the won prize is a real winning prize
  const isWinningPrize = wonPrize && (wonPrize.id === 'sun-shade' || wonPrize.id === 'bluetooth-speaker');

  const handleAwesomeClick = () => {
    setShowPrizePopup(false);
    onClose();
    onReset();
  };

  const renderGiftBox = (index: number) => {
    const isOpened = openedBoxes.has(index);
    const isSelected = selectedBox === index;
    const isAnyBoxSelected = selectedBox !== null; // Check if any box is selected
    
    return (
      <motion.div
        key={index}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: (isOpened || isAnyBoxSelected) ? 1 : 1.05 }}
        whileTap={{ scale: (isOpened || isAnyBoxSelected) ? 1 : 0.95 }}
        className={`relative ${(isOpened || isAnyBoxSelected) ? 'pointer-events-none' : 'cursor-pointer'}`}
        onClick={() => handleBoxClick(index)}
      >
        <div className={`w-20 h-20 bg-gradient-to-r from-blue-600 to-[#C8102E] rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpened ? 'scale-110' : isAnyBoxSelected ? 'opacity-50' : 'hover:shadow-xl'
        }`}>
          {isOpened && isSelected ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {wonPrize && <wonPrize.icon className="w-8 h-8 text-white" />}
            </motion.div>
          ) : (
            <Gift className="w-8 h-8 text-white" />
          )}
        </div>
        
        {/* Box number */}
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800">
          {index + 1}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent   showCloseButton={false} className="reward-popup quiz-card border-0 p-0 mx-auto max-w-2xl w-[90vw] h-[100vh] max-h-[1300px] bg-black/95">
          <div className="relative">
            {/* Back Button */}
            {onBack && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={onBack}
                className={`absolute top-4 ${isArabic ? 'right-4' : 'left-4'} z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200 ${isArabic ? 'font-arabic' : ''}`}
              >
                <svg 
                  className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-sm font-medium">{content.backButton}</span>
              </motion.button>
            )}

            {/* Confetti */}


            {/* Content */}
            <div className="p-8 text-center relative z-10 flex flex-col items-center justify-center h-full min-h-[400px]" dir={isArabic ? 'rtl' : 'ltr'}>
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
                <h2 className={`text-2xl font-bold text-white mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                  {content.title}
                </h2>
                <p className={`text-white/90 text-lg leading-relaxed mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                  {content.message1}
                </p>
                <p className={`text-white/80 text-base leading-relaxed mb-6 ${isArabic ? 'font-arabic' : ''}`}>
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
                    <span className={`text-white font-semibold ${isArabic ? 'font-arabic' : ''}`}>{content.prizeTitle}</span>
                    <Star className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className={`text-white/90 text-sm ${isArabic ? 'font-arabic' : ''}`}>
                    {content.prizeText}
                  </p>
                </div>
              </motion.div>

              {/* Gift Boxes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-6"
              >
                <div className="flex justify-center items-center gap-6 mb-4">
                  {[0, 1, 2].map(renderGiftBox)}
                </div>
                <p className={`text-white/70 text-sm ${isArabic ? 'font-arabic' : ''}`}>
                  {content.selectBox}
                </p>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

             {/* Prize Popup */}
 

             {/* <Confetti
                   width={400}
                   height={500}
                   recycle={false}
                   numberOfPieces={300}
                   colors={['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6', '#C8102E', '#FFD700', '#FF69B4', '#00CED1']}
                   gravity={0.2}
                   wind={0.03}
                   initialVelocityX={15}
                   initialVelocityY={30}
                   tweenDuration={3000}
                   confettiSource={{
                     x: 200,
                     y: 100,
                     w: 0,
                     h: 0
                   }}
                 /> */}
       <AnimatePresence>
         {showPrizePopup && wonPrize && (
                       <Dialog open={showPrizePopup} onOpenChange={() => setShowPrizePopup(false)}>
              <DialogContent showCloseButton={false} className="reward-popup quiz-card border-0 p-0 mx-auto max-w-2xl w-[90vw] h-[100vh] max-h-[1300px] bg-black/95" style={{position:'absolute'}}>
               <div className="relative">
                 {/* Confetti on Prize Popup - Only show for winning prizes */}
                 {showPrizePopup && wonPrize && isWinningPrize && createPortal(
  <div
    style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2147483647, // top of the world
      pointerEvents: 'none',
    }}
  >
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={300}
      colors={[
        '#8B5CF6', '#EC4899', '#F59E0B',
        '#10B981', '#3B82F6', '#C8102E',
        '#FFD700', '#FF69B4', '#00CED1'
      ]}
      gravity={0.2}
      wind={0.03}
      initialVelocityX={15}
      initialVelocityY={30}
      tweenDuration={3000}
      confettiSource={{
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 0,
        h: 0,
      }}
    />
  </div>,
  document.body
)}
                 <div className="p-8 text-center relative z-10 flex flex-col items-center justify-center h-full min-h-[400px]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="mb-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-[#C8102E] rounded-full flex items-center justify-center mx-auto">
                    <wonPrize.icon className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <h2 className={`text-white/90 text-xl font-semibold text-white mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                    {isWinningPrize ? content.youWin : (isArabic ? 'حاول مرة أخرى' : 'Try Again')}
                  </h2>
                                     <motion.p 
                                     className={`text-3xl font-bold text-white ${isArabic ? 'font-arabic' : ''}`}

                                     
                    //  className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
                     initial={{ scale: 0, x: -10 }}
                     animate={{ 
                       scale: 1,
                       x: [0, -2, 2, -2, 2, -1, 1, -1, 1, 0],
                       textShadow: [
                         "0 0 0px rgba(255, 215, 0, 0)",
                         "0 0 10px rgba(255, 215, 0, 0.6)",
                         "0 0 20px rgba(255, 215, 0, 0.8)",
                         "0 0 30px rgba(255, 215, 0, 1)",
                         "0 0 20px rgba(255, 215, 0, 0.8)",
                         "0 0 10px rgba(255, 215, 0, 0.6)",
                         "0 0 0px rgba(255, 215, 0, 0)"
                       ]
                     }}
                     transition={{ 
                       duration: 2,
                       scale: {
                         duration: 0.8
                       },
                       x: {
                         duration: 0.5,
                         repeat: Infinity,
                         repeatDelay: 1
                       },
                       textShadow: {
                         duration: 3,
                         repeat: Infinity,
                         repeatType: "reverse"
                       }
                     }}
                     whileHover={{ 
                       scale: 1.05,
                       transition: { duration: 0.2 }
                     }}
                   >
                     {isArabic ? wonPrize.nameArabic : wonPrize.name}
                   </motion.p>
                </motion.div>

                                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.4 }}
                   className="w-full"
                 >
                     <Button
                       onClick={handleAwesomeClick}
                       className={`w-full h-14 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg ${isArabic ? 'font-arabic' : ''}`}
                     >
                       {isWinningPrize ? content.buttonText : content.backButtonText}
                     </Button>
                 </motion.div>
               </div>
             </div>
           </DialogContent>
         </Dialog>
       )}
     </AnimatePresence>
    </>
  );
}
