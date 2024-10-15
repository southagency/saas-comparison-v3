/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF6600', // オレンジ色に変更
        secondary: '#6B7280',
      },
      fontFamily: {
        sans: ['Poppins', 'Yu Gothic', 'YuGothic', 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Meiryo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};