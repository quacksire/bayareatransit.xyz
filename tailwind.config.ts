import type {Config} from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      // WETA
      "aqua",
      // Muni
      "retro",
      {
        caltrain: {
          "primary": "#DD1F29",
          "secondary": "#4f4f4f",
          "accent": "#4f4f4f",
          "neutral": "#f6ffff",
          "base-100": "#22252a",
          "info": "#41ffff",
          "success": "#9affdc",
          "warning": "#fff129",
          "error": "#ffbab9",
        },
      },
      {
        samtrans: {
          "primary": "#075096",
          "secondary": "#4f4f4f",
          "accent": "#4f4f4f",
          "neutral": "#c7dce4",
          "base-100": "#22252a",
          "info": "#41ffff",
          "success": "#9affdc",
          "warning": "#fff129",
          "error": "#ffbab9",
        },
      },
      {
        actransit: {
          "primary": "#047857",
          "secondary": "#7cbf61",
          "accent": "#ffe4e6",
          "neutral": "#e7ecd9",
          "base-100": "#f4f4f5",
          "info": "#17a2b8",
          "success": "#4ade80",
          "warning": "#ffc107",
          "error": "#dc3545",
        },
      },
      {
        vta: {
          "primary": "#1d4ed8",
          "secondary": "#22d3ee",
          "accent": "#f3f4f6",
          "neutral": "#2a5687",
          "base-100": "#f4f4f5",
          "info": "#affbff",
          "success": "#a6ffbf",
          "warning": "#ffe38d",
          "error": "#f59e0b",
        },
      }]
  },
  plugins: [daisyui],
};
export default config;
