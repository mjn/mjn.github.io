module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: 'var(--bg-color)',
          text: 'var(--text-color)',
          accent: 'var(--accent-color)',
          prompt: 'var(--prompt-color)',
          cursor: 'var(--cursor-color)',
        }
      },
      fontFamily: {
        mono: ['"JetBrainsMono Nerd Font"', '"JetBrains Mono"', '"FiraCode Nerd Font"', '"Fira Code"', 'monospace'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
