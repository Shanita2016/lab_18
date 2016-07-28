# Group Project - Lab 18

Steve, Shanita, and Benson

## Currently working on

Steve -- create our module and inputCtrl, which grabs our Twitter API data




## General Idea

Homepage view
+ have an input form where people can enter a hashtag (that keyword is used as a filter)
+ clicking the submit button will pass the hashtag to the service/factory

Output view
+ display the 10 most recent tweets that used the hashtag our user entered


## General HTML
+ make use of ng-repeat


## Multiple Routes
+ add a new things
+ create route.js
+ use ngRoute (include it in our module) to connect views
+ add navigation for views in index.html
in app.js
var app = angular.module('ourAppName', ['ngRoute'])


in route.js
refer to our existing module
include $RouteProvider
set up the when / otherwise statements

## Controllers
+ create 2 controllers

## Views
+ set up two or more separate views (when statements)
+ each view should have it's own controller

## Services
+ create 1 service that works internally for our app (to share info between views)
+ create 1 service pulling data (twitter feed?)

## Directives
+ create 2 directives with templates using templateUrl (can store in partials folder or in root)

## External Dependencies
+ ngRoute
+ something other than ngRoute -- ngAnimate? possibly use ngAnimate to fade in/out new posts on the output page -- ngTouch to speed up input submission on mobile?
