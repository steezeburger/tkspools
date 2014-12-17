tkspools.factory('Authentication', 
  function($rootScope, $firebase, $firebaseAuth, $location, FIREBASE_URL) {
  
  var ref = new Firebase(FIREBASE_URL);
  var auth = $firebaseAuth(ref);
  
  var authObject = {
    login: function(user) {
      return auth.$authWithPassword({
        email: user.email,
        password: user.password
      });
    }
  }
  
  return authObject;
});