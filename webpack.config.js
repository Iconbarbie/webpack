const path = require('path');

module.exports = {
    entry: './src/app.js', //accessing a file
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}