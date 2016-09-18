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
    cty.strokeStyle = "green";
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
        $scope.inputInfoTitle = "Toptube Length";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 5) {
        console.log('Head Tube Angle');
        $scope.inputInfoTitle = "Headtube Angle";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 6) {
        console.log('Head Tube Length');
        $scope.inputInfoTitle = "Headtube Length";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 7) {
        console.log('Effective Toptube');
        $scope.inputInfoTitle = "Effective Toptube";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 8) {
        console.log('BB Height');
        $scope.inputInfoTitle = "Bottom Bracket Height";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 9) {
        console.log('Wheelbase');
        $scope.inputInfoTitle = "Wheelbase";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 10) {
        console.log('Seat Tube Length');
        $scope.inputInfoTitle = "Seattube Length";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 11) {
        console.log('Seattube Angle');
        $scope.inputInfoTitle = "Seattube Angle";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 12) {
        console.log('Chainstay Length');
        $scope.inputInfoTitle = "Chainstay Length";
        $scope.inputInfo = "The headange is this";
      }else if (choose == 13) {
        console.log('Reach');
        $scope.inputInfoTitle = "Reach";
        $scope.inputInfo = "The headange is this";

        };
    };

}]);



function clearcanvas()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
