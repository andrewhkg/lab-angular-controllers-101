var app = angular.module('myMuseumApp', []);

app.controller('ExhibitController', function($scope){
  $scope.image = 'exhibits.jpg';
  $scope.exhibits = 'Life and Theatre';
  $scope.name = 'Alexander Tikhonov'

})

app.controller('HourCotroller', function($scope){

  $scope.monday = '10am - 9pm';
  $scope.tuesday = "10am - 7pm";
  $scope.wednesday = "10am - 9pm";
  $scope.thursday ="10am - 7pm";
  $scope.friday = "11am - 10pm";
  $scope.saturday = "11am - 9pm";
  $scope.sunday = "11am - 6pm"

})

app.controller('InfoCotroller', function($scope){
  $scope.email = 'donor@donor.com';

})
