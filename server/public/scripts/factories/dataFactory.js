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
  };

  submitNewComparison = function (bike) {
  console.log("lets post a bike");
  var data = bike;
  var promise = $http.post('/bikes', data)
    .then(function () {
      console.log('POST /bikes', data);
    });
  return promise;
};

deleteCustomer = function (id) {
var promise = $http.delete('/bikes/' + id)
    .then(function () {
      console.log('DELETE /bikes/', id);
      getCustAndBikes();
      location.reload();
    });
    return promise;
};

  return {
        submitNewComparison: function(bike) {
          return submitNewComparison(bike);
        },
        deleteCustomer: function(id) {
          return deleteCustomer(id);
        },
        customers: function() {
          return customers;
        },
        getTheCustAndBike: function() {
          return getCustAndBikes();
        }

      };
}]);
