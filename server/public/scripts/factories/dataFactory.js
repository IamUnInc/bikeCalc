myApp.factory('DataFactory', ['$http', function($http) {

console.log("factory is working");

var customers = undefined;

var getCustAndBikes = function () {
    console.log("getting all saved customers");
    var promise = $http.get('/bikes')
      .then(function (response) {
        console.log('GET /bikes', response.data);

          customers = response.data;
           console.log(customers);
        });
    return promise;
  }

  var deleteCustomer = function(id) {
  var promise =  $http.delete('/bikes/' + id)
      .then(function () {
        console.log('DELETE /bikes/', id);
        getCustAndBikes();
      });
    return promise;
  };




  return {
        customers: function() {
          return customers;
        },
        getTheCustAndBike: function() {
          return getCustAndBikes();
        },
        delete: function(id) {
          return customers;
        }
      };
}]);
