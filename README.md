# Quiz Challenge App

A beautiful, mobile-first quiz application built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations, elegant UI, and a reward system with confetti effects.

## Features

- 📱 **Mobile-First Design**: Optimized for portrait mode on all screens
- 🎨 **Beautiful UI**: Clean, elegant design with custom gradient themes
- ✨ **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- 🎯 **Interactive Quiz**: Multiple choice questions with progress tracking
- 🎉 **Reward System**: Confetti animation and score display on completion
- 🔄 **Navigation**: Back and next buttons with fade animations
- 📊 **Progress Tracking**: Visual progress bar showing quiz completion

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Confetti**: react-confetti
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page component
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Question.tsx         # Individual question component
│   ├── Quiz.tsx             # Main quiz logic
│   └── Reward.tsx           # Reward popup component
├── data/
│   └── questions.ts         # Quiz questions data
└── types/
    └── quiz.ts              # TypeScript type definitions
```

## Customization

### Adding Questions

Edit `src/data/questions.ts` to add or modify quiz questions:

```typescript
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctAnswer: 2 // Index of correct answer (0-based)
  }
];
```

### Theme Colors

Modify the CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.6 0.25 280);    /* Purple */
  --secondary: oklch(0.7 0.2 320);   /* Pink */
}
```

### Styling

The app uses custom utility classes:
- `.quiz-gradient`: Gradient background for buttons
- `.quiz-card`: Glassmorphism effect for cards
- `.mobile-portrait`: Mobile-first responsive container

## Features in Detail

### Mobile-First Design
- Portrait orientation optimized
- Responsive aspect ratio handling
- Touch-friendly button sizes
- Smooth scrolling and interactions

### Animations
- Fade transitions between questions
- Hover and tap animations on buttons
- Progress bar animations
- Confetti celebration effects

### Quiz Logic
- State management for answers
- Progress tracking
- Score calculation
- Navigation between questions

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

- Optimized for mobile devices
- Minimal bundle size
- Efficient animations
- Fast loading times

## License

MIT License - feel free to use this project for your own applications!
