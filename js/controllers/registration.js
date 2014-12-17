tkspools.controller('RegistrationController', 
  function($scope, $firebaseAuth, $location, Authentication) {
  
  // authenticates user with password when they click login
  $scope.login = function() {
    Authentication.login($scope.user)
    .then(function(user) {
      console.log("Logged in as:", user.password.email);
      $location.path('/customers');
    }).catch(function(error) {
      $scope.errorMessage = error.toString();
      console.error("Authentication failed:", error);
    });
  }
  
  $scope.register = function() {
    $location.path('/customers');
  }
  
});