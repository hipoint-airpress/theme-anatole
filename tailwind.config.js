module.exports = {
    content: ["./*.tmpl", "./module/*.tmpl"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
    safelist: ['animate-bounce']
}
