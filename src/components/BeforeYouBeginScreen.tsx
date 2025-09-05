// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

// interface BeforeYouBeginScreenProps {
//   onStart: () => void;
//   onBack: () => void;
//   language: 'english' | 'arabic';
// }

// export function BeforeYouBeginScreen({ onStart, onBack, language }: BeforeYouBeginScreenProps) {
//   const isArabic = language === 'arabic';
  
//   const content = {
//     title: isArabic ? 'تمهيد قبل الانطلاق' : 'Before You Begin',
//     buttonText: isArabic ? 'ابدأ رحلتك' : 'Start Your Journey',
//     backButtonText: isArabic ? 'العودة' : 'Back',
//     tips: isArabic ? [
//       'قبل أن تبدأ التحدي، تذكّر أن نجاحك يبدأ بخطوات واثقة ومدروسة!',
//       'اختر التمويل الأنسب لخططك المالية.',
//       'اطّلع على كافة التكاليف والشروط.'
//     ] : [
//       'Before diving in, remember, success starts with confident steps',
//       'Choose the financing option that suits your goals.',
//       'Make sure you\'re aware of all costs and conditions.'
//     ]
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="w-full h-full flex flex-col justify-center items-center p-8 text-center"
//       dir={isArabic ? 'rtl' : 'ltr'}
//     >
//       {/* Back Button */}
//       {/* <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="absolute top-8 left-8 z-10"
//       >
//         <Button
//           onClick={onBack}
//           variant="outline"
//           className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 px-4 py-2"
//         >
//           <ArrowLeft className={`w-5 h-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
//           {content.backButtonText}
//         </Button>
//       </motion.div> */}

//       <div className="max-w-md mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-8"
//         >
//           <h1 className="text-3xl font-bold text-white mb-4">
//             {content.title}
//           </h1>
//         </motion.div>

//         {/* Tips */}
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mb-8"
//         >
//           <div className="space-y-4">
//             {content.tips.map((tip, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ x: isArabic ? 20 : -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                 className={`flex items-start ${isArabic ? 'flex-row-reverse space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'}`}
//               >
//                 <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//                 <p className={`text-white/90 text-lg leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
//                   {tip}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//    <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="absolute top-8 left-8 z-10"
//       >
//         <Button
//           onClick={onBack}
//           variant="outline"
//           className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200 px-4 py-2"
//         >
//           <ArrowLeft className={`w-5 h-5 ${isArabic ? 'ml-2' : 'mr-2'}`} />
//           {content.backButtonText}
//         </Button>
//       </motion.div> 
       
//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//         >
//           <Button
//             onClick={onStart}
//             className="w-full h-16 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg"
//           >
//             {content.buttonText}
//             <ArrowRight className={`w-5 h-5 ${isArabic ? 'ml-0 mr-3 rotate-180' : 'ml-3'}`} />
//           </Button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';

interface BeforeYouBeginScreenProps {
  onStart: () => void;
  onBack: () => void;
  language: 'english' | 'arabic';
}

export function BeforeYouBeginScreen({ onStart, onBack, language }: BeforeYouBeginScreenProps) {
  const isArabic = language === 'arabic';
  
  const content = {
    title: isArabic ? 'تمهيد قبل الانطلاق' : 'Before You Begin',
    buttonText: isArabic ? 'ابدأ رحلتك' : 'Start Your Journey',
    backButtonText: isArabic ? 'العودة' : 'Back',
    tips: isArabic ? [
      'قبل أن تبدأ التحدي، تذكّر أن نجاحك يبدأ بخطوات واثقة ومدروسة!',
      'اختر التمويل الأنسب لخططك المالية.',
      'اطّلع على كافة التكاليف والشروط.'
    ] : [
      'Before diving in, remember, success starts with confident steps',
      'Choose the financing option that suits your goals.',
      'Make sure you\'re aware of all costs and conditions.'
    ]
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
        {/* Header */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-4">
            {content.title}
          </h1>
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <div className="space-y-4">
            {content.tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ x: isArabic ? 20 : -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className={`flex items-start ${isArabic ? 'flex-row-reverse space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'}`}
              >
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className={`text-white/90 text-lg leading-relaxed ${isArabic ? 'text-right' : 'text-left'}`}>
                  {tip}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
     
        {/* Buttons Row (Back + Start) */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.6 }}
  className={`flex ${isArabic ? 'flex-row-reverse' : 'flex-col'} items-center gap-4 mt-2`}
>
  {/* Back */}
  <Button
    onClick={onBack}
    className="flex-1 h-14 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg"
  >
    <ArrowLeft className={`w-5 h-5 ${isArabic ? 'ml-2 rotate-180' : 'mr-2'}`} />
    {content.backButtonText}
  </Button>

  {/* Start */}
  <Button
    onClick={onStart}
    className="flex-1  h-14 bg-gradient-to-r from-blue-600 to-[#C8102E] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 no-select text-lg"
  >
    {content.buttonText}
    <ArrowRight className={`w-5 h-5 ${isArabic ? 'mr-2 rotate-180' : 'ml-2'}`} />
  </Button>
</motion.div>
</div>
   
    </motion.div>
  );
}
