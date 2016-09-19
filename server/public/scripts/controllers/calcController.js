myApp.controller('CalcController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("CalcController works");

  $scope.dataFactory = DataFactory;
  $scope.customerInfo = {};
  $scope.firstBike = {};
  $scope.secondBike = {};
  $scope.diffBike = {};
  $scope.inputInfo = "";
  $scope.inputInfoTitle = "";

  $scope.calcTheDiff = function () {
    $scope.diffBike = {};
    $scope.diffBike.toptubeLength = 0;//trying to get rid of the NaNs on the dom
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

    clearcanvas();
    addBikeToCustomer();
    makingPictures();
  }

  makingPictures = function () {
    var canvas = "";

    var bbx = 190; //bb height
    var bby = 320; //bb height
    var stx = 175; //seatstay length
    var sty = 180; //seatstay length
    var csx = 65; //chainstay lenght
    var csy = 305;//chainstay length
    var htx = 365;//headtube length
    var hty = 190;//headtube length
    var rx = 370; //reach but actuall the length of downtube
    var ry = 230; //reach but actuall the length of downtube

//seattube length adjuster
  if ($scope.diffBike.seattubeLength > 1 && $scope.diffBike.seattubeLength <= 20) {
    stx += 2;
    sty += 18;
  }
  else if ($scope.diffBike.seattubeLength > 20) {
    stx += 4;
    sty += 32;
  } else if ($scope.diffBike.seattubeLength < 0 && $scope.diffBike.seattubeLength >= -20) {
    stx -= 2;
    sty -= 18;
  } else if ($scope.diffBike.seattubeLength < -20) {
    stx -= 4;
    sty -= 32;
  }

//chainstay length adjuster
  if ($scope.diffBike.chainstayLength > 1 && $scope.diffBike.chainstayLength <= 10) {
    csx += 8;
    csy += 1;
  } else if ($scope.diffBike.chainstayLength > 10) {
    csx += 16;
    csy += 2;
  } else if ($scope.diffBike.chainstayLength < 0 && $scope.diffBike.chainstayLength >= -10) {
    csx -= 8;
    csy -= 1;
  } else if ($scope.diffBike.chainstayLength < -10) {
    csx -= 16;
    csy -= 2;
  }

//headtube length adjuster
  if ($scope.diffBike.headtubeLength > 1 && $scope.diffBike.headtubeLength <= 10) {
    rx += 1;
    ry += 8;
  } else if ($scope.diffBike.headtubeLength > 10) {
    rx += 2;
    ry += 16;
  } else if ($scope.diffBike.headtubeLength < 0 && $scope.diffBike.headtubeLength >= -10) {
    rx -= 1;
    ry -= 8;
  } else if ($scope.diffBike.headtubeLength < -10) {
    rx -= 2;
    ry -= 16;
  }

  //reach adjuster
    if ($scope.diffBike.reach > 1 && $scope.diffBike.reach <= 25) {
      rx -= 15;
      htx -= 15;
    } else if ($scope.diffBike.reach > 25) {
      rx -= 30;
      htx -= 30;
    } else if ($scope.diffBike.reach < 0 && $scope.diffBike.reach >= -25) {
      rx += 15;
      htx += 15;
    } else if ($scope.diffBike.reach < -25) {
      rx += 30;
      htx += 30;
    }



    console.log("i work");
  var canvas = document.querySelector("canvas"),
    ctz = canvas.getContext ("2d");
    ctz.beginPath();
    ctz.moveTo(10, 10);
    ctz.font = "30px Arial";
    ctz.fillStyle = "black";
    ctz.fillText("Bike One",10,50);

    cta = canvas.getContext ("2d");
    cta.beginPath();
    cta.font = "30px Arial";
    cta.fillStyle = "#0000ff";
    cta.fillText("Bike Two",60,100);

    ctx = canvas.getContext ("2d");
    ctx.beginPath();
    ctx.moveTo(190, 320); //BB
    ctx.lineTo(175, 180); //BB to the top of seattube
    ctx.lineTo(65, 305);  //top of seattube to end of chainstay
    ctx.lineTo(190, 320);   //end of chainstay to BB
    ctx.lineTo(370, 230); //BB to the end of downtube
    ctx.lineTo(365, 190); //bottom of headtube to top
    ctx.lineTo(175, 180); //top of headtube to the toptube at seattube
    ctx.lineJoin = "round";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8.0;
    ctx.stroke();

    cty = canvas.getContext ("2d");
    cty.beginPath();
    cty.moveTo(bbx, bby); //BB
    cty.lineTo(stx, sty); //BB to the top of seattube
    cty.lineTo(csx, csy);  //top of seattube to end of chainstay
    cty.lineTo(bbx, bby);   //end of chainstay to BB
    cty.lineTo(rx, ry); //BB to the end of downtube
    cty.lineTo(htx, hty); //bottom of headtube to top
    cty.lineTo(stx, sty); //top of headtube to the toptube at seattube
    cty.lineJoin = "round";
    cty.strokeStyle = "#0000ff";
    cty.lineWidth = 3.0;
    cty.stroke();

  }

// This brings all the information into one object
  function addBikeToCustomer () {
    $scope.customerInfo.bikeOneInfo = $scope.firstBike;
    $scope.customerInfo.bikeTwoInfo = $scope.secondBike;
    $scope.customerInfo.bikeCompInfo = $scope.diffBike;

    console.log("this is all the data together: ", $scope.customerInfo);
  }

$scope.print = function() {
    window.print();
};

$scope.saveData = function() {
$scope.dataFactory.submitNewComparison($scope.customerInfo);
};

$scope.bikeInfo = function (input) {
      var choose = input;
      if (choose == 1) {
        console.log("Make");
        $scope.inputInfoTitle = "Make";
        $scope.inputInfo = "The make of the bicycle is the company that it is manufactured by.";
      }else if (choose == 2) {
        console.log('Model');
        $scope.inputInfoTitle = "Model";
        $scope.inputInfo = "The model is the name given to the bicycle by its manufacturer.";
      }else if (choose == 3) {
        console.log('Size');
        $scope.inputInfoTitle = "Size";
        $scope.inputInfo = "The size is the assigned size by the manufacturer";
      }else if (choose == 4) {
        console.log('Top Tube Length');
        $scope.inputInfoTitle = "Top Tube Length";
        $scope.inputInfo = "The top tube is the tube that runs horizontally connecting the seat tube and the head tube.";
      }else if (choose == 5) {
        console.log('Head Tube Angle');
        $scope.inputInfoTitle = "Head Tube Angle";
        $scope.inputInfo = "The head tube angle is the angle that the head tube is postion.";
      }else if (choose == 6) {
        console.log('Head Tube Length');
        $scope.inputInfoTitle = "Head Tube Length";
        $scope.inputInfo = "The head tube is the tube that runs vertically connecting the top tube and the down tube.";
      }else if (choose == 7) {
        console.log('Effective Top Tube');
        $scope.inputInfoTitle = "Effective Top Tube";
        $scope.inputInfo = "The effective top tube is the length between the seat tube and the head tube assuming a horizontal top tube.";
      }else if (choose == 8) {
        console.log('BB Height');
        $scope.inputInfoTitle = "Bottom Bracket Height";
        $scope.inputInfo = "The bottom bracket height is the distance between the center of the bottom bracket and the ground.";
      }else if (choose == 9) {
        console.log('Wheelbase');
        $scope.inputInfoTitle = "Wheelbase";
        $scope.inputInfo = "The wheelbase is the distance between the center of the back drop out to the center of the front drop out.";
      }else if (choose == 10) {
        console.log('Seat Tube Length');
        $scope.inputInfoTitle = "Seat Tube Length";
        $scope.inputInfo = "The seat tube length is the length of the tube that runds verically between the top tube and the bottom bracket.";
      }else if (choose == 11) {
        console.log('Seat Tube Angle');
        $scope.inputInfoTitle = "Seat Tube Angle";
        $scope.inputInfo = "The seat tube angle is the degree of angle that the seat tube is positioned.";
      }else if (choose == 12) {
        console.log('Chainstay Length');
        $scope.inputInfoTitle = "Chainstay Length";
        $scope.inputInfo = "The chainstay length is the length of the tube that connects the top of the seat tube to the rear drop out.";
      }else if (choose == 13) {
        console.log('Reach');
        $scope.inputInfoTitle = "Reach";
        $scope.inputInfo = "The reach is the distance from the center of the bottom bracket to the center of the head tube.";

        };
    };

}]);



function clearcanvas()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
