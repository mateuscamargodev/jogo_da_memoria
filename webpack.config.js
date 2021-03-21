const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = [];

if(process.env.NODE_ENV == 'production'){
    plugins.push(new babiliPlugin());
}

module.exports = {
    entry: './app/js/app.js',
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins
}