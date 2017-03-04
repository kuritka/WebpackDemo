
# webpack demo 


![Demo ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/1.PNG?raw=true)

Forget these technologies because they have no longer deserve attention

   - bundling + minification on server side (ASPNET modules , Rails modules)
   - task runners and their complex configs - gulp, grunt , currently I don't see why to use them 
   - Bower
   
**Now we have WebPack!**
   
sample demo shows : 
  
 1. webserver (webpack-dev-server)
 2. watching changes + autorefresh browsers 
 3. bundling 
 4. SASS compiling
 5. Loaders: babel (esX to es5 ), **ready for Angular2 or React projects**  
 6. static analysis in preLoad (jshint-loader: before babel executes)
 7. minifying bundle for PROD release but skipping minification for DEV + stripping out Trace messages (console.log)
 8. producing multiple bundles (lazy loading scenarios; shared and divided resources )
 9. Autoprefixing (i.e. to background: linear-gradient(to top, #eee, white);  automatically adds background: -webkit-linear-gradient(bottom, #eee, white);)
 10. executes all by 'npm start'
 11. build **PROD** by 'npm run build'
 12. Images: Webpack transforms images to base64 format (url-loader, file-loader); (i.e. images up to size 100kb are downloaded as inlined base64 image instead of downloading multiple resources. Bigger images are not transformed).
 13. Fonts: If font  exceeds specified size limit it will be copied to build folder, otherwise it is bundled in css
 14. Demonstration responsive pages. *Using lightweight flex positioning instead of bootstrap containers*   

### how to run demo

 * $ npm install 
 * $ npm install webpack -g
 * $ npm install webpack-dev-server -g
 * $ npm install http-server -g
 * **$ npm start** *for running or* **$ npm run build** *to get PROD version*
 * open browser window with http://localhost:8080 
 * change app.es6 login('admin','1234sa'); to  login('admin','blah');  and see what happens


![Webpack Run ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/WebpackRun.PNG?raw=true)

![Webpack Run ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/1.PNG?raw=true)

![Webpack Run ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/2.PNG?raw=true)

![Webpack Run ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/3.PNG?raw=true)

![Webpack Run ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/4.PNG?raw=true)

![Webpack Run ](https://github.com/kuritka/Pics/blob/master/WebpackDemo/5.PNG?raw=true)