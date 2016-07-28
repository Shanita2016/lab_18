var app = angular.module('whatsTrending');

app.config(function($routeProvider){
  $routeProvider.when('/',
    {
      controller: "hashtagInputCtrl",
      templateUrl: 'partials/input.html'
    })
    .when('/output',
    {
      controller: "hashtagOutputCtrl",
      templateUrl: 'partials/output.html'
    })
    .otherwise({redirectTo : '/'});
});
