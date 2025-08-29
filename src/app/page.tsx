'use client';

import { useState } from 'react';
import { Quiz } from '@/components/Quiz';
import { IntroScreen } from '@/components/IntroScreen';
import { BeforeYouBeginScreen } from '@/components/BeforeYouBeginScreen';
import { LanguageScreen } from '@/components/LanguageScreen';
import { 
  quizGoals, 
  quizStages, 
  quizQuestions,
  quizGoalsArabic,
  quizStagesArabic,
  quizQuestionsArabic
} from '@/data/questions';

// hooks/useViewport.ts
import BackgroundVideo from '@/components/BackgroundVideo';

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'arabic' | null>(null);
  const [showIntro, setShowIntro] = useState(false);
  const [showBeforeBegin, setShowBeforeBegin] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleLanguageSelect = (language: 'english' | 'arabic') => {
    setSelectedLanguage(language);
  };

  const handleStartIntro = () => {
    setShowIntro(true);
  };

  const handleStartBeforeBegin = () => {
    setShowBeforeBegin(true);
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleReset = () => {
    setSelectedLanguage(null);
    setShowIntro(false);
    setShowBeforeBegin(false);
    setShowQuiz(false);
  };

  // Get content based on selected language
  const getContent = () => {
    if (selectedLanguage === 'arabic') {
      return {
        goals: quizGoalsArabic,
        stages: quizStagesArabic,
        questions: quizQuestionsArabic
      };
    }
    return {
      goals: quizGoals,
      stages: quizStages,
      questions: quizQuestions
    };
  };

  const content = getContent();

  // Determine which screen to show
  const getCurrentScreen = () => {
    if (!selectedLanguage) {
      return <LanguageScreen onLanguageSelect={handleLanguageSelect} />;
    }
    
    if (!showIntro) {
      return <IntroScreen onStart={handleStartIntro} language={selectedLanguage} />;
    }
    
    if (!showBeforeBegin) {
      return <BeforeYouBeginScreen onStart={handleStartBeforeBegin} language={selectedLanguage} />;
    }
    
    if (!showQuiz) {
      return <Quiz 
        goals={content.goals}
        stages={content.stages}
        questions={content.questions}
        onReset={handleReset}
        language={selectedLanguage}
      />;
    }
    
    return (
      <Quiz 
        goals={content.goals}
        stages={content.stages}
        questions={content.questions}
        onReset={handleReset}
        language={selectedLanguage}
      />
    );
  };
  return (
    <div className={`min-h-screen w-full relative bg-transparent ${selectedLanguage === 'arabic' ? 'font-arabic' : 'font-english'}`}>
      {/* FULLSCREEN VIDEO BACKGROUND */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {/* <BackgroundVideo/> */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[100vw] h-[100svh] object-cover"
        >
          <source src="/bg_video.mp4" type="video/mp4" />
        </video>
        {/* Optional: darken for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />
      </div>
  
      {/* (Optional) Landscape static image on top of video */}
      <div className="absolute inset-0 z-0 hidden lg:block  pointer-events-none" />
  
      {/* Main Content */}
      <div className="relative z-10 w-full h-screen flex flex-col bg-transparent">
        <main className="flex-1">
          <div className="max-w-md mx-auto h-full relative">
            {/* Content */}
            <div className="mobile-portrait relative z-10 w-full h-full">
              {getCurrentScreen()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
  
  // return (
  //   <div className="min-h-screen w-full relative overflow-hidden bg-transparent">
  //     {/* Background Image for Landscape Mode */}
  //     <div className="absolute inset-0 z-0 hidden lg:block bg-black/80">
  //       <img
  //         src="/bg_image.png"
  //         alt="Background"
  //         className="w-full h-full object-cover blur-lg"
  //       />
  //     </div>
      
  //     {/* Main Content */}
  //     <div className="relative z-10 w-full h-screen flex flex-col bg-transparent">
  //       {/* Quiz Container */}
  //       <main className="flex-1">
  //         <div className=" max-w-md mx-auto h-full relative">
  //           {/* Video Background */}
  //           <div className="absolute inset-0 z-0">
  //             <video
  //               autoPlay
  //               loop
  //               muted
  //               playsInline
  //                  className="w-screen h-screen object-cover"
  //               // className="w-full h-full object-fill"
  //             >
  //               <source src="/bg_video.mp4" type="video/mp4" />
  //             </video>
  //             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/80" />
  //           </div>

  //           {/* Content */}
  //           <div className="mobile-portrait relative z-10 w-full h-full">
  //             {getCurrentScreen()}
  //           </div>
  //         </div>
  //       </main>
  //     </div>
  //   </div>
  // );
}
