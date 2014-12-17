// create app and pass it required modules
var tkspools = angular.module('tkspools', 
  ['ngRoute', 'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://tkspools.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

// define routes and their controllers
tkspools.config(['$routeProvider', function($routeProvider) {
  $routeProvider. 
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
  }). 
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'    
  }). 
    when('/customers', {
      templateUrl: 'views/customers.html',
      controller: 'CustomersController'      
  }).
    otherwise({
      redirectTo: '/login'
  });

}]);