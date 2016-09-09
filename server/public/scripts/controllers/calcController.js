myApp.controller('CalcController', ['$scope', function($scope) {
  console.log("CalcController works");

  $scope.firstBike = {};
  $scope.secondBike = {};
  $scope.diffBike = {};

  $scope.calcTheDiff = function () {
    $scope.diffBike = {};
    $scope.diffBike.toptubeLength = $scope.firstBike.toptubeLength - $scope.secondBike.toptubeLength;
    console.log($scope.diffBike.toptubeLength);

    $scope.diffBike.headtubeAngle = $scope.firstBike.headtubeAngle - $scope.secondBike.headtubeAngle;
    console.log($scope.diffBike.headtubeAngle);

    $scope.diffBike.headtubeLength = $scope.firstBike.headtubeLength - $scope.secondBike.headtubeLength;
    console.log($scope.diffBike.headtubeLength);

    $scope.diffBike.effectiveToptube = $scope.firstBike.effectiveToptube - $scope.secondBike.effectiveToptube;
    console.log($scope.diffBike.effectiveToptube);

    $scope.diffBike.bbHeight = $scope.firstBike.bbHeight - $scope.secondBike.bbHeight;
    console.log($scope.diffBike.bbHeight);

    $scope.diffBike.wheelBase = $scope.firstBike.wheelBase - $scope.secondBike.wheelBase;
    console.log($scope.diffBike.wheelBase);

    $scope.diffBike.seattubeLength = $scope.firstBike.seattubeLength - $scope.secondBike.seattubeLength;
    console.log($scope.diffBike.seattubeLength);

    $scope.diffBike.seattubeAngle= $scope.firstBike.seattubeAngle - $scope.secondBike.seattubeAngle;
    console.log($scope.diffBike.seattubeAngle);

    $scope.diffBike.chainstayLength = $scope.firstBike.chainstayLength - $scope.secondBike.chainstayLength;
    console.log($scope.diffBike.chainstayLength);

    $scope.diffBike.reach = $scope.firstBike.reach - $scope.secondBike.reach;
    console.log($scope.diffBike.reach);
  }

}]);
