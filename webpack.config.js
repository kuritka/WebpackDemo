var path = require('path');
var webpack = require('webpack');

//var commonPlugin = new webpack.optimize.CommonChunkPlugin('shared.js'); 

module.exports =  {
    context: path.resolve('js'),
    // entry: {
    //     about: './about_page.js',
    //     something: './something_page.js'
    // },//
    entry: ["./app", "./utils.js"],
    output: {
        path: path.resolve('public/js/'),
        publicPath: '/js/',
        filename: "[name].js"                   //gets name from entry: {...}
    },

  //  plugins: [commonPlugin],

    devServer: {
        contentBase: 'public'   //all webpack-dev-server requests look to this folder and requests to /public/js/ look to build/js
    },
    watch:true,
    module: {      
        rules:[
        {
            //enforce: pre is hack to old versions 
            //from Webpack 2.1.1 25 beta we use preLoaders: [] array. 
            //as 201702 2.1.1 25 beta is working under linux but not under Win
            enforce: 'pre',              
            test: /\.js$/,              // include .js files 
            exclude: /node_modules/,    // exclude any and all files in the node_modules folder 
            loader: "jshint-loader"
        },
          {
            enforce: 'post',              
            test: /\.es6$/,              // include .js files 
            exclude: /node_modules/,    // exclude any and all files in the node_modules folder 
            loader: "babel-loader",
            query: {
                    presets:  ['es2015']
                }
          }
        ], 
        //loaders cannot be null because webpack.config.PROD minifies ECMA5 bundle.js
        //Webpack 2.x.x with babel on Win machine didnt transform to ES5, thats why 
        //following sections doesnt exists and enforce sections must exist
        // preloaders: [
        //     {
        //     test: /\.js$/,              // include .js files 
        //     exclude: /node_modules/,    // exclude any and all files in the node_modules folder 
        //     loader: "jshint-loader"
        //     }
        // ]
        // loaders: [
        //     {
        //         test: [/\.es6$/],         //regular expressions at .js 
        //         exclude: /node_modules/,
        //         loader: 'babel-loader'
        //     }
        // ]
    },
    resolve: {
        //which extensions webpack resolves (app.js : require(.. ))
        extensions: ['.js','.es6']
    }

}