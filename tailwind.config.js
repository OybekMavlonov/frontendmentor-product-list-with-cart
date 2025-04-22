export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      red_hat: ['Red_Hat_Text', 'monospace'],
      backgroundImage: {
        'gradient-text': 'linear-gradient(to bottom, hsl(7, 86%, 67%), hsl(0, 0%, 100%))',
      },
      screens: {
        xs: '380px',
      },
      colors: {
        rose: {
          50: "hsl(20, 50%, 98%)",
          100: "hsl(13, 31%, 94%)",
          300: "hsl(14, 25%, 72%)",
          400: "hsl(7, 20%, 60%)",
          500: "hsl(12, 20%, 44%)",
          900: "hsl(14, 65%, 9%)",
        },
        red: "hsl(14, 86%, 42%)",
        green: "hsl(159, 69%, 38%)"
      }
    },
  },
}
