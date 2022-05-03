const defaultTheme = require('tailwindcss/defaultTheme');

const THEMES = require('./themes.config');

// console.log(defaultTheme)

module.exports = {
    content: [
        "../../packages/ui/**/*.{js,ts,jsx,tsx,css}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['Manrope', ...defaultTheme.fontFamily.sans],
            'serif': ['Manrope', ...defaultTheme.fontFamily.serif],
            'mono': ['Manrope', ...defaultTheme.fontFamily.mono]
        }
    },
    plugins: [
        require('tailwindcss-themer')(THEMES)
    ]
}
