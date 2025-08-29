# Font Setup Documentation

## Current Font Configuration

This application uses language-specific fonts:

- **Arabic Language**: Cairo font (Google Fonts)
- **English Language**: Inter font (Google Fonts) - as fallback for Formula Normal

## Font Implementation

### CSS Classes
- `.font-arabic` - Applies Cairo font for Arabic text
- `.font-english` - Applies Inter font for English text

### Dynamic Font Application
The font is automatically applied based on the selected language in the main container:
```jsx
<div className={`... ${selectedLanguage === 'arabic' ? 'font-arabic' : 'font-english'}`}>
```

## Using Formula Normal Font (Optional)

If you want to use the Formula Normal font for English text instead of Inter:

1. **Download Formula Normal font files** and place them in `src/fonts/`:
   - `FormulaNormal-Regular.woff2`
   - `FormulaNormal-Medium.woff2`
   - `FormulaNormal-Bold.woff2`

2. **Update `src/app/layout.tsx`**:
```tsx
import localFont from "next/font/local";

const formulaNormal = localFont({
  src: [
    {
      path: "../fonts/FormulaNormal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/FormulaNormal-Medium.woff2", 
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FormulaNormal-Bold.woff2",
      weight: "700", 
      style: "normal",
    },
  ],
  variable: "--font-formula-normal",
  display: "swap",
});
```

3. **Update CSS variables** in `src/app/globals.css`:
```css
--font-sans: var(--font-formula-normal);
--font-mono: var(--font-formula-normal);
```

4. **Update font utility class**:
```css
.font-english {
  font-family: var(--font-formula-normal), system-ui, sans-serif;
}
```

## Font Features

- **Cairo**: Optimized for Arabic text with proper ligatures and character spacing
- **Inter**: Modern, highly readable font for English text
- **Formula Normal**: Premium font option for English text (requires license)

## Browser Support

Both fonts support modern browsers and include fallbacks to system fonts for better compatibility.
