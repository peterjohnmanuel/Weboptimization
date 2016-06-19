## Website Performance Optimization portfolio project

Optimize code for the udacity project

## Webserver

* IIS 

## Instructions

* Clone the web optimization project or download the .zip file from (github)[https://github.com/peterjohnmanuel/Weboptimization.git]
* Navigate to the dist folder and open the index.html to begin testing the application.

## Testing using a webserver.

* Download and install python for you operating system (make sure to install the python enviroment path).
* Open cmd or terminal depending on the os and navigate to the project directory.
* Enter : python -m SimpleHttpServer 8080[port]
* Navigate to http://localhost:port

## Testing the page score

* Download [ngrok](https://ngrok.com/)
* Extract ngrok from the zip file.
* Start ngrok.exe by double clicking the file (depending on os).
* Enter ngrok http port.
* This will provide a link where the site is temporaily hosted. 
* Open a browser and go (google page speed insights)[https://developers.google.com/speed/pagespeed/insights/].
* Click analyze and wait for the page speed score. 

### Changes Done:

#### Index.html

* Changed media query for printing:

```
  <link href="css/print.css" rel="stylesheet" media="print" type="text/css">
```

* Added new css file, seperated media query css and added media query to the link tag:
```
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/smartphone.css" rel="stylesheet" media="only screen and (max-width: 480px)" type="text/css">
``` 

* Added async to google analytics script tag:
```
<script async src="http://www.google-analytics.com/analytics.js"></script>
```

* Moved css tags to the bottom of the body tag.
* Moved javascript tags to the bottom of the body tag.
* Compress image to specified width and height on page.
* Added defer attribute to all css tags.

#### project-2048.html

* Changed media query for printing:

```
  <link href="css/print.css" rel="stylesheet" media="print" type="text/css">
```

* Added new css file, seperated media query css and added media query to the link tag:
```
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/smartphone.css" rel="stylesheet" media="only screen and (max-width: 480px)" type="text/css">
``` 
* Added async attributes to the script tags. 
* Moved javascript and css tags to the bottom of the body tag.

#### project-mobile.html

* Compress and minified picture.
* Added async attributes to the script tags. 
* Changed media query for printing:

```
  <link href="css/print.css" rel="stylesheet" media="print" type="text/css">
```

* Added new css file, seperated media query css and added media query to the link tag:
```
<link href="css/style.css" rel="stylesheet" type="text/css">
<link href="css/smartphone.css" rel="stylesheet" media="only screen and (max-width: 480px)" type="text/css">
``` 
* Moved javascript and css tags to the bottom of the body tag.

#### views/pizza.html

* Moved css tags to the bottom of the bottom.


#### views/js/main.js

  * Removed all adjectives from switch statement.
  * Removed all Nouns from switch statement.
  * Cached variables outside of loop in makeRandomPizza.
  * Cached the pizzaElementGenerator variables outside of a loop.
  * Cached variable out of loop that creates and appends the pizza when screen loads. 

* UpdatePositions method optimizations:
    * Changed to getElementsByClassName
    * Moved scrolltop to a variable outside of the loop.
    * Added phase variable.
    * Added phase loop to populate the 5 phases.
    * Changed to translateX to enhance performance. 

* changePizzaSizes method optimizations:
    * Change: Changed to Get Elements by class name.
    * Change: Removed dx from loop.
    * Change: Removed dx from loop.
    * Change: Removed selector in loop.

* Optimizations on the DOMContentLoaded method.

    * Change: Cached elem variable. 
    * Change: Get rows from browser height.
    * Change: Get columns from browser width.
    * Change: Set number of pizza's with row's and col's     

#### views/css/style.css

* Added backface visibility

#### General Changes

* Installed gulp task runner.
* Installed and configured gulp uglify task.
* Installed and configured gulp html minify task.
* Installed and configured gulp css minify task.
* Installed and configured gulp del task (Delete's old dist files before running task).
* Installed and configured gulp live reload.
* Installed and configured gulp image resize.
* Installed and configured gulp image minification.
* Installed and configured gulp rename.
* Installed and configured gulp useref.

### Gulp Modules Used

* [Gulp Uglify](https://www.npmjs.com/package/gulp-uglify)
* [Gulp Html Minifier](https://www.npmjs.com/package/gulp-html-minifier)
* [Gulp Clean CSS](https://www.npmjs.com/package/gulp-clean-css)
* [Gulp Delete files and folders Github Repository](https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md)
* [Gulp Live Reload](https://www.npmjs.com/package/gulp-livereload)
* [Gulp Image Resize](https://www.npmjs.com/package/gulp-image-resize)
* [Gulp Image min](https://www.npmjs.com/package/gulp-imagemin)
* [Gulp Rename](https://www.npmjs.com/package/gulp-rename)
* [Gulp Useref](https://www.npmjs.com/package/gulp-useref)

 
### Links Used:

* [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [Learning Gulp #8 - LiveReload With Gulp](https://www.youtube.com/watch?v=r5fvdIa0ETk)
* [Request animation frame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
* [Google Page Speed insights](https://developers.google.com/speed/pagespeed/insights/)
* [Ngrok](https://ngrok.com/)
* [Nodejs](https://nodejs.org/en/)
* [Pagespeed Optimization](https://varvy.com/pagespeed/)
* [Gulp](http://gulpjs.com/) 
* [Python](https://www.python.org/)
* [How to use SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
* [Online readme file editing](http://dillinger.io/)
