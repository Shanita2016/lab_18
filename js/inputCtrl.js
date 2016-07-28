var app = angular.module('whatsTrending');

app.controller('hashtagInputCtrl', function($scope){
  $http({
  method: 'GET',
  url: '' // add url w/ API key ?
  }).then(function successCallback(response) {
    // use the response object  -- check angular documentation for $http for more info

    // change scope to reflect the kind of data we are working with
    $scope.badges = response.data.badges;
  }, function errorCallback(response) {
    console.log(response);
  });
});
