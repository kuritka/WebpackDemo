var strip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
    test: [/\.js$/,/\.es6$/],
    exclude: /node_modules/,
    loader: strip.loader('console.log','perfLog')
}

//webpack 1.x.x + babel  doesnt support loaders: devConfig.module.loaders.push(stripLoader);
devConfig.module.rules.push(stripLoader);

devConfig.watch = false;

module.exports = devConfig;