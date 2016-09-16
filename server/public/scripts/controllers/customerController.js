myApp.controller('CustomerController', ['$scope', 'DataFactory', function($scope, DataFactory) {
console.log("CustomerController works");

$scope.bikes = [];
$scope.showBike = [];
$scope.dataFactory = DataFactory;


if($scope.dataFactory.customers() === undefined) {
    console.log('factory has no data, getting it now.');
    $scope.dataFactory.getTheCustAndBike().then(function() {
      $scope.bikes = $scope.dataFactory.customers();
    });
  } else {
    $scope.bikes = $scope.dataFactory.customers();
  }

// function getCustAndBikes() {
//   $http.get('/bikes')
//     .then(function (response) {
//       console.log('GET /bikes', response.data);
//
//         $scope.bikes = response.data;
//          console.log($scope.bikes);
//       });
// }


  // $scope.deleteCustomer = function (id) {
  //   $http.delete('/bikes/' + id)
  //     .then(function () {
  //       console.log('DELETE /bikes/', id);
  //       getCustAndBikes();
  //     });
  // };


function findTheBike(theId) {
    $scope.showBike = [];
    console.log(theId);
    $scope.showBike = $scope.bikes[theId];
    console.log($scope.showBike);

}

  $scope.custom = true;

  $scope.toggleCustom = function(bikeid) {

    findTheBike(bikeid);
  $scope.custom = $scope.custom === false ? true: false;
  };



}]);
