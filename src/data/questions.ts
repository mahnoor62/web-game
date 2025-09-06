import { QuizGoal, QuizStage, QuizQuestion } from '@/types/quiz';

// English Content
export const quizGoals: QuizGoal[] = [
  {
    id: 'car',
    title: 'Buy a car',
    description: 'Get the vehicle of your dreams with flexible financing options'
  },
  {
    id: 'home',
    title: 'Furnish your home',
    description: 'Transform your living space with beautiful furniture and appliances'
  },
  {
    id: 'business',
    title: 'Grow your business',
    description: 'Expand your business with the right financing support'
  }
];

export const quizStages: QuizStage[] = [
  {
    id: 'goal',
    title: 'Define Your Goal',
    description: 'What\'s your dream?',
    goal: 'all'
  },
  {
    id: 'financing',
    title: 'Getting the Financing',
    description: 'What\'s the first thing you do to get financing?',
    goal: 'all'
  },
  {
    id: 'documents',
    title: 'Required Documents',
    description: 'How do you find out which documents are needed?',
    goal: 'all'
  },
  {
    id: 'repayment',
    title: 'Choosing the Right Repayment Term',
    description: 'Which repayment term works best for you?',
    goal: 'all'
  },
  {
    id: 'application',
    title: 'Completing Your Application',
    description: 'How will you submit your documents?',
    goal: 'all'
  },
  {
    id: 'signing',
    title: 'Signing the Financing Agreement',
    description: 'What should you do before signing the financing contract?',
    goal: 'all'
  }
];

export const quizQuestions: QuizQuestion[] = [
  // Stage 1: Define Your Goal
  {
    id: 'goal-selection',
    question: 'What\'s your dream?',
    stage: 'goal',
    options: [
      {
        id: 'car',
        text: 'Buy a car',
        feedback: 'Great choice! Let\'s help you get the car of your dreams with the right financing plan.'
      },
      {
        id: 'home',
        text: 'Furnish your home',
        feedback: 'Excellent! We\'ll help you create the perfect living space with flexible financing options.'
      },
      {
        id: 'business',
        text: 'Grow your business',
        feedback: 'Amazing! Let\'s support your business growth with the right financing solution.'
      }
    ]
  },
  
  // Stage 2: Getting the Financing (Car)
  {
    id: 'financing-car',
    question: 'What\'s the first thing you do to get financing?',
    stage: 'financing',
    goal: 'car',
    options: [
      {
        id: 'dealership',
        text: 'I head straight to the dealership',
        feedback: 'A predictable step! However, it’s better to set a budget in advance so you can choose the right financing plan that supports your business growth with comfort and financial security.'
      },
      {
        id: 'budget',
        text: 'I set my budget',
        feedback: 'Excellent! A smart step that reflects your responsibility — defining your budget from the start, gives you greater financial peace of mind.'
      },
      {
        id: 'buy-first',
        text: 'Grow your business with a bold step, then plan for financing.',
        feedback: 'An inspiring experience! And with a well-prepared budget in advance, expansion becomes easier and more secure.'
      }
    ]
  },
  
  // Stage 2: Getting the Financing (Home)
  {
    id: 'financing-home',
    question: 'What\'s the first thing you do to get financing?',
    stage: 'financing',
    goal: 'home',
    options: [
      {
        id: 'stores',
        text: 'I go directly to the furniture stores',
        feedback: 'A predictable step! However, it\'s better to set a budget in advance so you can choose furniture that fits within your plan.'
      },
      {
        id: 'budget',
        text: 'I set my budget',
        feedback: 'Excellent! A smart step that reflects your responsibility — defining your budget from the start gives you greater financial comfort.'
      },
      {
        id: 'furnish-first',
        text: 'Furnish my home with elegance, then think about financing',
        feedback: 'A wonderful experience! Still, setting a clear budget first helps you choose the right furniture without worrying about financial commitments.'
      }
    ]
  },
  
  // Stage 2: Getting the Financing (Business)
  {
    id: 'financing-business',
    question: 'What\'s the first thing you do to get financing?',
    stage: 'financing',
    goal: 'business',
    options: [
      {
        id: 'expand-first',
        text: 'I head straight to the dealership',
        feedback: 'Expected move! But, it\'s better to set your budget first so you can pick the right car with a comfortable repayment plan.'
      },
      {
        id: 'budget',
        text: 'I define my budget',
        feedback: 'Smart move! Setting your budget from the start shows you’re financially responsible and helps you stay in control.'
      },
      {
        id: 'grow-first',
        text: 'I buy the car, then look for financing',
        feedback: 'That’s bold! But setting your budget first ensures the financing matches your financial plans.'
      }
    ]
  },
  
  // Stage 3: Required Documents (All goals)
  {
    id: 'documents',
    question: 'How do you find out which documents are needed?',
    stage: 'documents',
    options: [
      {
        id: 'friend',
        text: 'I ask a friend who\'s done it before',
        feedback: 'Helpful, but it\'s safer to rely on official sources like the website or customer service to get the most accurate information.'
      },
      {
        id: 'official',
        text: 'I visit the website or contact customer service',
        feedback: 'Well done! That\'s the easiest way to get up-to-date and accurate information.'
      },
      {
        id: 'figure-later',
        text: 'I submit my application and figure it out later',
        feedback: 'A risky shortcut! It\'s better to check official sources first to save time and avoid back-and-forth.'
      }
    ]
  },
  
  // Stage 4: Repayment Terms (All goals)
  {
    id: 'repayment',
    question: 'Which repayment term works best for you?',
    stage: 'repayment',
    options: [
      {
        id: '12-months',
        text: '12 months',
        feedback: 'Great! A short-term plan means faster payoff and less financial commitment.'
      },
      {
        id: '24-months',
        text: '24 months',
        feedback: 'Nice choice! It offers balance, manageable monthly payments with flexibility.'
      },
      {
        id: '120-months',
        text: '120 months',
        feedback: 'Good! A long-term plan makes monthly payments lighter, but be mindful of the total repayment over time.'
      }
    ]
  },
  
  // Stage 5: Application Submission (All goals)
  {
    id: 'application',
    question: 'How will you submit your documents?',
    stage: 'application',
    options: [
      {
        id: 'branch-only',
        text: 'I\'ll visit the branch only',
        feedback: 'You\'re always welcome! But for convenience, try sending your documents via WhatsApp at 92576777 It saves time and effort.'
      },
      {
        id: 'whatsapp',
        text: 'I\'ll send them via WhatsApp',
        feedback: 'Perfect! Fast, easy, and efficient. You can upload your documents via WhatsApp at 92576777. Of course, you\'re always welcome at the branch too.'
      },
      {
        id: 'email',
        text: 'I\'ll send them via email',
        feedback: 'Almost there! But WhatsApp submission at 92576777 is quicker and more efficient.'
      }
    ]
  },
  
  // Stage 6: Signing Agreement (All goals)
  {
    id: 'signing',
    question: 'What should you do before signing the financing contract?',
    stage: 'signing',
    options: [
      {
        id: 'read-terms',
        text: 'I read all terms and conditions',
        feedback: 'Excellent! This is the essence of responsible borrowing. It ensures you understand every detail before committing.'
      },
      {
        id: 'trust-sign',
        text: 'I sign right away because I trust the company',
        feedback: 'Trust matters, but never skip reading the fine print. Always protect your rights.'
      },
      {
        id: 'request-copy',
        text: 'I request a copy of the contract',
        feedback: 'Professional move! After reading everything carefully, keeping a copy of your contract is essential for future reference.'
      }
    ]
  }
];

// Arabic Content
export const quizGoalsArabic: QuizGoal[] = [
  {
    id: 'car',
    title: 'شراء سيارتك',
    description: 'احصل على السيارة التي تحلم بها مع خيارات تمويل مرنة'
  },
  {
    id: 'home',
    title: 'تأثيث منزلك',
    description: 'حوّل مساحة معيشتك بأثاث وأجهزة جميلة'
  },
  {
    id: 'business',
    title: 'توسعة مشروعك',
    description: 'وسّع مشروعك بالدعم التمويلي المناسب'
  }
];

export const quizStagesArabic: QuizStage[] = [
  {
    id: 'goal',
    title: 'تحديد الهدف',
    description: 'ما هو حلمك؟',
    goal: 'all'
  },
  {
    id: 'financing',
    title: 'الحصول على التمويل',
    description: 'ما أول خطوة تتخذها للحصول على التمويل؟',
    goal: 'all'
  },
  {
    id: 'documents',
    title: 'المستندات المطلوبة',
    description: 'كيف تتعرف على المستندات المطلوبة للحصول على التمويل؟',
    goal: 'all'
  },
  {
    id: 'repayment',
    title: 'تحديد مدة السداد المناسبة',
    description: 'ما هي مدة السداد التي تناسبك؟',
    goal: 'all'
  },
  {
    id: 'application',
    title: 'إتمام الطلب',
    description: 'كيف يمكنك تقديم مستنداتك؟',
    goal: 'all'
  },
  {
    id: 'signing',
    title: 'توقيع عقد التمويل',
    description: 'ماذا يجب أن تفعل قبل توقيع عقد التمويل؟',
    goal: 'all'
  }
];

export const quizQuestionsArabic: QuizQuestion[] = [
  // Stage 1: Define Your Goal
  {
    id: 'goal-selection',
    question: 'ما هو حلمك؟',
    stage: 'goal',
    options: [
      {
        id: 'car',
        text: 'شراء سيارتك',
        feedback: 'اختيار ممتاز! دعنا نساعدك في الحصول على السيارة التي تحلم بها مع خطة التمويل المناسبة.'
      },
      {
        id: 'home',
        text: 'تأثيث منزلك',
        feedback: 'ممتاز! سنساعدك في إنشاء مساحة معيشة مثالية مع خيارات تمويل مرنة.'
      },
      {
        id: 'business',
        text: 'توسعة مشروعك',
        feedback: 'رائع! دعنا ندعم نمو مشروعك بالحل التمويلي المناسب.'
      }
    ]
  },
  
  // Stage 2: Getting the Financing (Car)
  {
    id: 'financing-car',
    question: 'ما أول خطوة تتخذها للحصول على التمويل؟',
    stage: 'financing',
    goal: 'car',
    options: [
      {
        id: 'dealership',
        text: 'أذهب مباشرةً إلى المعرض',
        feedback: 'خطوة متوقعة! ولكن من الأفضل تحديد الميزانية مسبقًا لتتمكن من اختيار السيارة المناسبة بخطة سداد مريحة.'
      },
      {
        id: 'budget',
        text: 'أحدد ميزانيتي',
        feedback: 'ممتاز! خطوة ذكية تعكس مسؤوليتك، تحديد ميزانيتك من البداية تمنحك راحة مالية أكبر.'
      },
      {
        id: 'buy-first',
        text: 'أشتري السيارة ثم أبحث عن تمويل',
        feedback: 'خطوة جريئة! لكن من الأفضل تحديد الميزانية أولاً لضمان ملاءمة التمويل لخططك المالية.'
      }
    ]
  },
  
  // Stage 2: Getting the Financing (Home)
  {
    id: 'financing-home',
    question: 'ما أول خطوة تتخذها للحصول على التمويل؟',
    stage: 'financing',
    goal: 'home',
    options: [
      {
        id: 'stores',
        text: 'أذهب مباشرةً إلى محلات الأثاث',
        feedback: 'خطوة متوقعة! ولكن من الأفضل تحديد الميزانية مسبقًا لتتمكن من اختيار الاثاث المتناسب مع ميزانيتك.'
      },
      {
        id: 'budget',
        text: 'أحدد ميزانيتي',
        feedback: 'ممتاز! خطوة ذكية تعكس مسؤوليتك، تحديد ميزانيتك من البداية تمنحك راحة مالية أكبر.'
      },
      {
        id: 'furnish-first',
        text:'أقوم بتأثيث منزلي ثم أبحث عن التمويل​',
        feedback: 'تجربة رائعة! ومع ذلك، تحديد ميزانية واضحة أولًا يساعدك على اختيار الأثاث المناسب دون قلق على التزاماتك المالية.'
      }
    ]
  },
  
  // Stage 2: Getting the Financing (Business)
  {
    id: 'financing-business',
    question: 'ما أول خطوة تتخذها للحصول على التمويل؟',
    stage: 'financing',
    goal: 'business',
    options: [
      {
        id: 'expand-first',
        text: 'أبدأ مباشرةً بالتوسع في المشروع',
        feedback: 'خطوة متوقعة! ولكن من الأفضل تحديد الميزانية مسبقًا لتتمكن من اختيار خطة التمويل المناسبة التي تدعم نمو مشروعك براحة وأمان مالي.'
      },
      {
        id: 'budget',
        text: 'أحدد ميزانيتي',
        feedback: 'ممتاز! خطوة ذكية تعكس مسؤوليتك، تحديد ميزانيتك من البداية تمنحك راحة مالية أكبر.'
      },
      {
        id: 'grow-first',
        text: 'أُنَــــمّي مشروعي بخطوة جريئة، ثم أخطــط للتمويل',
        feedback: 'تجربة ملهمة! ومع ميزانية مدروسة مسبقًا، يصبح التوسع أسهل وأكثر أمانًا.'
      }
    ]
  },
  
  // Stage 3: Required Documents (All goals)
  {
    id: 'documents',
    question: 'كيف تتعرف على المستندات المطلوبة للحصول على التمويل؟',
    stage: 'documents',
    options: [
      {
        id: 'friend',
        text: 'أسأل صديقًا سبق له الحصول على تمويل',
        feedback: 'تجارب الآخرين مفيدة، لكن الأفضل الاعتماد على مصادر رسمية كالموقع الإلكتروني أو خدمة العملاء لضمان دقة المعلومات.'
      },
      {
        id: 'official',
        text: 'أزور الموقع الإلكتروني أو أتواصل مع خدمة العملاء',
        feedback: 'أحسنت! بهذه الطريقة تضمن الحصول على أدق وأحدث المعلومات بسهولة.'
      },
      {
        id: 'figure-later',
        text: 'أقدّم الطلب وأرى لاحقًا ما يُطلب',
        feedback: 'خطوة جريئة، لكن الأفضل تعتمد على مصادر رسمية كالموقع الإلكتروني أو خدمة العملاء لضمان دقة المعلومات، وكذا توفر وقتك وجهدك.'
      }
    ]
  },
  
  // Stage 4: Repayment Terms (All goals)
  {
    id: 'repayment',
    question: 'ما هي مدة السداد التي تناسبك؟',
    stage: 'repayment',
    options: [
      {
        id: '12-months',
        text: '12 شهرًا',
        feedback: 'رائع! خطة قصيرة الأجل تضمن لك سداداً مرناً وإنهاء الالتزام المالي سريعًا.'
      },
      {
        id: '24-months',
        text: '24 شهرًا',
        feedback: 'رائع! خيار مـوزون يمنحك مرونة جيدة ويجعل أقساطك الشهرية أخف.'
      },
      {
        id: '120-months',
        text: '120 شهرًا',
        feedback: 'جيد! فترة طويلة تضمن لك سدادًا مريحًا بأقساط شهرية أقل.'
      }
    ]
  },
  
  // Stage 5: Application Submission (All goals)
  {
    id: 'application',
    question: 'كيف يمكنك تقديم مستنداتك؟',
    stage: 'application',
    options: [
      {
        id: 'branch-only',
        text: 'أزور الفرع فقط',
        feedback: 'زيارتك للفرع محل ترحيب دائمًا، ولكن المنصات الرقمية توفّر عليك الوقت والجهد، وبسهولة تستطيع رفع مستنداتك عبر الواتساب 92576777.'
      },
      {
        id: 'whatsapp',
        text: 'أقدّم عبر الواتساب',
        feedback: 'ممتاز! اخترت الطريقة الأسهل والأسرع، وبسهولة تستطيع رفع مستنداتك عبر الواتساب 92576777، وتظل زيارتك للفرع دائماً محل ترحيب.'
      },
      {
        id: 'email',
        text: 'أرسلها عبر البريد الإلكتروني',
        feedback: 'اقتربت! لكن تقديم المستندات عبر الواتساب 92576777 يضمن لك سهولة وسرعة أكبر.'
      }
    ]
  },
  
  // Stage 6: Signing Agreement (All goals)
  {
    id: 'signing',
    question: 'ماذا يجب أن تفعل قبل توقيع عقد التمويل؟',
    stage: 'signing',
    options: [
      {
        id: 'read-terms',
        text: 'أقرأ الشروط والتفاصيل كاملة',
        feedback: 'أحسنت! هذا هو جوهر التمويل المسؤول،ويضمن لك اتخاذ قرار واعٍ ومسؤول.'
      },
      {
        id: 'trust-sign',
        text: 'أوقّع مباشرةً لأنني أثق بالمؤسسة',
        feedback: 'الثقة مهمة، لكن لا تغني عن قراءة الشروط والتفاصيل كاملة لحماية حقوقك.'
      },
      {
        id: 'request-copy',
        text: 'أطلب نسخة من العقد للاحتفاظ بها',
        feedback: 'خطوة احترافية! بعد قراءة جميع الشروط والتفاصيل، من المهم أن تطلب نسخة من العقد للاحتفاظ بها مستقبلاً.'
      }
    ]
  }
];
