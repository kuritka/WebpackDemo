var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//http://blog.grossman.io/writing-es6-ionic-code-with-webpack/
//var commonPlugin = new webpack.optimize.CommonChunkPlugin('shared.js'); 

module.exports =  {
    context: path.resolve('js'),
    entry: ["./app", "./utils.js"],
    output: {
        path: path.resolve('public/js/'),
        publicPath: '/js/',
        filename: "bundle.js"                   //gets name from entry: {...}
    },

    plugins: [new ExtractTextPlugin('styles.css')],

    devServer: {
        contentBase: 'public'   //all webpack-dev-server requests look to this folder and requests to /public/js/ look to build/js
    },
    watch:true,
    module: {    
        //WINDOWS  
        rules:[
        {
            //enforce: pre is hack to old versions 
            //from Webpack 2.1.1 25 beta we use preLoaders: [] array. 
            //as 201702 2.1.1 25 beta is working under linux but not under Win
            enforce: 'pre',              
            test: /\.js$/,               
            exclude: /node_modules/,      
            loader: "jshint-loader"
        },
        {
            enforce: 'post',              
            test: /\.es6$/,              
            exclude: /node_modules/,     
            loader: "babel-loader",
            query: {
                    presets:  ['es2015']
                }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,    
            loader: ExtractTextPlugin.extract({use:"css-loader"})       //runs css loader first through style-loader
        },
        {
            test: /\.less$/,
            exclude: /node_modules/,    
            loader: ExtractTextPlugin.extract({ use: "css-loader!less-loader"})       //runs css loader first through style-loader
        }
        ], 
        // LINUX
        //loaders cannot be null because webpack.config.PROD minifies ECMA5 bundle.js
        //Webpack 2.x.x with babel on Win machine didnt transform to ES5, thats why 
        //following sections doesnt exists and enforce sections must exist
        // preloaders: [
        //     {
        //     test: /\.js$/,              
        //     exclude: /node_modules/,     
        //     loader: "jshint-loader"
        //     }
        // ]
        // loaders: [
        //     {
        //         test: [/\.es6$/],         
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