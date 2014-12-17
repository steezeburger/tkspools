tkspools.controller('StatusController',
  function($scope, $rootScope, $location, $firebase, $firebaseAuth, FIREBASE_URL) {
  
  var ref = new Firebase(FIREBASE_URL);
  // auth object
  var auth = $firebaseAuth(ref);
  
  // $rootScope detectible by entire app
  // if user is available, show customers
  // ng-show="user" in index
  $rootScope.auth = auth;
  $rootScope.user = $scope.auth.$getAuth();
  
  $scope.logout = function() {
    $rootScope.auth.$unauth;
    $rootScope.user = null;
    $location.path('/login');
    console.log('logged out');
  }
  
});