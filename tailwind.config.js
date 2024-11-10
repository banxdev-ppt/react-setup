/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        clampH1: 'clamp(24px, 5vw, 32px)',
        clampH2: 'clamp(18px, 5vw, 24px)',
        clampH3: 'clamp(16px, 5vw, 18px)',
        clampH4: 'clamp(14px, 5vw, 16px)',
        clampH5: 'clamp(10px, 5vw, 14px)',
        clampH6: 'clamp(8px, 5vw, 10px)',
      },
      fontFamily: {
        notoSanThai: ['Noto Sans Thai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
