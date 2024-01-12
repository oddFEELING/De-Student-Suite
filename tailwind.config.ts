import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-bg': "url('/landing/landing-img.jpg')",
        'rota-hero-bg': "url('/rota/hero-bg.jpg')",
        'about-hero-bg': "url('/about/hero-bg.jpg')",
        'event-hero-bg': "url('/event/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
