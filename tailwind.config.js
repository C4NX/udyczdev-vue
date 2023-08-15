/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  safelist: [
    /* Badge is dynamic, so we need to whitelist all possible classes */
    'badge-primary',
    'badge-secondary',
    'badge-accent',
    'badge-neutral',
    'badge-ghost',
  ],
  plugins: [daisyui],
}