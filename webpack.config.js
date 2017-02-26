var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//http://blog.grossman.io/writing-es6-ionic-code-with-webpack/
//var commonPlugin = new webpack.optimize.CommonChunkPlugin('shared.js'); 

module.exports =  {
    context: path.resolve('js'),
    entry: ["./app", "./utils.js"],
    output: {
        path: path.resolve('public/assets/'),
        publicPath: '/assets/',
        filename: "js/bundle.js"                   //gets name from entry: {...}
    },

    plugins: [new ExtractTextPlugin({filename: 'css/styles.css',allChunks: true,fallback: 'style-loader'})],

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
            loader: ExtractTextPlugin.extract({ fallback: "style-loader", use:"css-loader!postcss-loader" , allChunks: true})       //runs css loader first through style-loader
        },
        {
            // we will proccess scss files when required
            test: /\.scss$/,
            exclude: /node_modules/, 
            // we will extract the output file to a different location and will inject it manualy to the page
            // used for performance boost and good for large apps.
            // we will also generate sourcemaps, disable in production
            loader: ExtractTextPlugin.extract({ use: "css-loader!postcss-loader!sass-loader", allChunks: true })
        }
        ], 
    },
    resolve: {
        //which extensions webpack resolves (app.js : require(.. ))
        extensions: ['.js','.es6']
    }

}