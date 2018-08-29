const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        bundle: ['./src/index.ts']
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { name: 'worker.js' }
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
        ]
    },

    mode: 'development',
};
