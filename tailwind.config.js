module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blush: '#E91786',
        night: '#080808',
        cream: '#FFF8F0',
        christmasRed: '#B11226',
        pine: '#0F5132',
        gold: '#D8B86A'
      },
      fontFamily: {
        display: ['serif'],
        body: ['sans-serif']
      },
      backgroundImage: {
        heroGlow: 'radial-gradient(circle at top, rgba(233,23,134,0.2), transparent 50%)'
      }
    }
  },
  plugins: []
}
