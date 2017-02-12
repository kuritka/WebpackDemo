module.exports =  {
    entry: ["./app.js", "./utils.js"],
    output: {
        filename: "bundle.js"
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