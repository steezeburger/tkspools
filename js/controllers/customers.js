tkspools.controller('CustomersController', 
  function($scope, $firebase) {
  
  // create reference to firebase
  var ref = new Firebase('https://tkspools.firebaseio.com/customers');
  // pass reference to customers
  var customers = $firebase(ref);
  
  // binds customers to scopeobject as an object
  $scope.customers = customers.$asObject();
  
  // add customer to firebase and clear input fields
  $scope.addCustomer = function() {
    customers.$push({
      firstName: $scope.customer.firstName,
      lastName: $scope.customer.lastName
    }).then(function() {
      $scope.customer.firstName = '';
      $scope.customer.lastName = '';
    });
  }
  
  // remove user from database based on what customer was clicked
  // removes all children
  $scope.deleteCustomer = function(key) {
    customers.$remove(key);
  }
  
});