var strip = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
    test: [/\.js$/,/\.es6$/],
    exclude: /node_modules/,
    loader: strip.loader('console.log','perfLog')
}

//webpack 2.x.x + babel  + WIN doesnt support loaders section  devConfig.module.loaders.push(stripLoader);
devConfig.module.rules.push(stripLoader);

devConfig.watch = false;

module.exports = devConfig;