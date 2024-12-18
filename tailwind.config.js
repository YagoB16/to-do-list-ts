/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            width: {
                '92p': '92%',
                '50p': '50%',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
