const path = require('path');

const WEB_ROOT = path.resolve(__dirname, 'public');

console.log(WEB_ROOT);

module.exports = {
    entry: './src/index.js',
    output: {
        path: WEB_ROOT,
        filename: 'bundle.js',
        publicPath: WEB_ROOT
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
