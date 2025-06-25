import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('tailwindcss').Config} */

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [react()],


})
