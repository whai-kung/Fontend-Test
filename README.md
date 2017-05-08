# Test Fontend skill

## To install this project.

`git clone git@github.com:whai-kung/Fontend-Test.git` for ssh
or
`git clone https://github.com/whai-kung/Fontend-Test.git` for https

`npm install
`bower install

## To run the project
For developing you can user `gulp watch` to compile less to css
And user `gulp serve` to create a server and it will create a server on `localhost:8080`

To build you will user `gulp build` to minify of css and javascript
To test build version you can use `gulp test` and it will create a server and show the web site from `dist` directory on `localhost:8080`


## Answer the questions
My estimated after I read the requirement was 14 hrs, and I was planing to use bootstrap for responsive and less to write css to keep it clean and also plan to use google map instead of image.

I’m using HTML5 because it support more technology and more browser. CSS3 is very useful to speed up the browser, Javascript is to call library of google map, carousel, and bootstrap and the most important is bootstrap because this is the best way to do responsive.

my test is on http://walkingpenguins.tk/hogarth

To run this project the index.html is in the app directory.
and CSS is in the styles directory

To implement you can modify less in directory less and run gulp watch to compile less to css.

p.s. I attached the whole bower_components but what you need is just a few files in it.

## Support browser
As I use bootstrap 3.3.7
The link below is what browser support and not support responsive
`http://getbootstrap.com/getting-started/#support-browsers`

Mobile devices
Generally speaking, Bootstrap supports the latest versions of each major platform's default browsers. Note that proxy browsers (such as Opera Mini, Opera Mobile's Turbo mode, UC Browser Mini, Amazon Silk) are not supported.

          Chrome	    Firefox	    Safari
Android	  Supported	  Supported	  N/A
iOS	      Supported	  Supported	 Supported

Desktop browsers
Similarly, the latest versions of most desktop browsers are supported.

          Chrome	    Firefox	    Internet 	  Opera	      Safari
Mac	      Supported	  Supported	  N/A	        Supported	  Supported
Windows	  Supported	  Supported	 Supported	  Supported	  Not supported
On Windows, we support Internet Explorer 8-11.

For Firefox, in addition to the latest normal stable release, we also support the latest Extended Support Release (ESR) version of Firefox.

Unofficially, Bootstrap should look and behave well enough in Chromium and Chrome for Linux, Firefox for Linux, and Internet Explorer 7, as well as Microsoft Edge, though they are not officially supported.

For a list of some of the browser bugs that Bootstrap has to grapple with, see our Wall of browser bugs.

Internet Explorer 8 and 9
Internet Explorer 8 and 9 are also supported, however, please be aware that some CSS3 properties and HTML5 elements are not fully supported by these browsers. In addition, Internet Explorer 8 requires the use of Respond.js to enable media query support.

Feature	        IE8            IE9
border-radius	  Not supported	 Supported
box-shadow	    Not supported	 Supported
transform	      Not supported	 Supported, with -ms prefix
transition	    Not supported
placeholder	    Not supported
