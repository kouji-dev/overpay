const config = require('config/tailwind.config.js');

module.exports = {
    ...config,
    content: [
        "./**/*.{css}",
    ],
}