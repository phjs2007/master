import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fundo": "#04052e",
        "button": "#a0d62e",
      },
      padding: {
        'sm_main': '50px 40px 0 40px',
        "main": "30px 20px 0 20px"
      },
      margin: {
        'sm_main': '0px 60px 0 60px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(94,145,15,1) 0%, rgba(161,193,64,1) 100%)',
        'bg-custom': "url('https://images.gog.com/1bbef106456ae10b4bac6f3700e9a1b537fd58016734fb55af8506236d890c9a_big_spot_background_943x396_2x.webp')",

      },
    },
  },
  plugins: [],
};
export default config;
