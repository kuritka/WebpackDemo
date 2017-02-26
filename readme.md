
run
 $ npm install 
 $ npm install webpack-dev-server -g


run webpapck and browse app with http://localhost:8080/
run webpack-dev-server and browse app with http://localhost:8080/webpack-dev-server  for autorefresh
run webpack-dev-server --inline and browse app with http://localhost:8080 for autorefresh
run npm start and browse app with http://localhost:8080 for autorefresh


$ npm install http-server -g
run webpack --config webpack.config.PROD.js -p    (compiles uglified bundle.js)
run http-server and check minified ES5 bundle on localhost:8080
or run "npm run build"  because start and test are built in scripts for npm. build however
is a custom script and thus needs to be invoked with npm run build.



Forget these technologies because they have no longer deserve attention

   - bundling + minification on server side (ASPNET modules , Rails modules)
   - task runners and their complex configs - gulp, grunt should be useful for some kind of static analysis and test automation
   - Bower
   
Now we have WebPack!
   
sample demo demonstrates typical 2016+ frontend development : 
  
 webserver (webpack-dev-server)
 watching changes + autorefresh browsers 
 bundling 
 LESS,SASS
 Loaders: babel (esX to es5 )
 static analysis in preLoad (jshint-loader: before babel executes)
 minifying bundle for PROD release but skipping minification for DEV + stripping out Trace messages (console.log)
 producing multiple bundles (lazy loading scenarios; shared and divided resources )
 Autoprefixing (i.e. to background: linear-gradient(to top, #eee, white);  automatically adds background: -webkit-linear-gradient(bottom, #eee, white);)
 execute all by 'npm start'
 build PROD by 'npm run build'



https://designshack.net/articles/css/7-awesome-emmet-html-time-saving-tips/

http://codepen.io/dgca/pen/QExbKN