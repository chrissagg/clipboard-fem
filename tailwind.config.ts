import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //### Primary
      'primary': 'hsl(171, 66%, 44%)',
      'secondary': 'hsl(233, 100%, 69%)',
  
        //### Neutral
      'darkGray': 'hsl(210, 10%, 33%)',
      'grayish': 'hsl(201, 11%, 66%)',

        //### Background
      'semiwhite': '#f2f2f2'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'header-mobile': "url('/public/assets/bg-header-mobile.png')",
        'header-desktop': "url('/public/assets/bg-header-desktop.png')",
      },
    },
  },
  plugins: [],
}
export default config
