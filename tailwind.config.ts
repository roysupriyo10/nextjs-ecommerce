import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#86ed76",

          "secondary": "#7842c4",

          "accent": "#b8e6fc",

          "neutral": "#1f1c26",

          "base-100": "#372d43",

          "info": "#2b6af3",

          "success": "#20bc66",

          "warning": "#f1a832",

          "error": "#fc694f",
          "body": {
            "background-color": "e3e6e6"
          }
        },
      },
    ]
  },
  plugins: [require("daisyui")],

}
export default config
