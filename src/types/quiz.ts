export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    feedback: string;
  }[];
  stage: string;
  goal?: string;
}

export interface QuizGoal {
  id: string;
  title: string;
  description: string;
}

export interface QuizStage {
  id: string;
  title: string;
  description: string;
  goal: string;
}

export interface QuizState {
  currentStage: number;
  selectedGoal: string | null;
  answers: Record<string, string>;
  isComplete: boolean;
  showReward: boolean;
}

export interface QuizProps {
  goals: QuizGoal[];
  stages: QuizStage[];
  questions: QuizQuestion[];
}
