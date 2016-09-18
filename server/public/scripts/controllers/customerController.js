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
  };

$scope.deleteCustomer = function (id){
$scope.dataFactory.deleteCustomer(id);
}

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
