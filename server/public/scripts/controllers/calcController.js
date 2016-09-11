myApp.controller('CalcController', ['$scope', function($scope) {
  console.log("CalcController works");

  $scope.customerInfo = {};
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

    makingPictures();
  }



}]);


makingPictures = function () {
  console.log("i work");
var canvas = document.querySelector("canvas"),
  ctx = canvas.getContext ("2d");
ctx.beginPath();
ctx.moveTo(135, 300);
ctx.lineTo(115, 100);
ctx.lineTo(50,125);
// ctx.closePath();

// ctx.fillStyle = "rgba (255,150,50,0.5)";
// ctx.fill();

ctx.strokeStyle = "red";
ctx.lineWidth = 2.0;
ctx.stroke();
}
