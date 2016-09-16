var express = require('express');
var router = express.Router();
var customerBikes = require('../models/customerAndBikes.js');

router.get('/', function (req, res) {
  customerBikes.find({}, function (err, bikes) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.send(bikes);
  });
});

router.get('/:id', function (req, res) {
  console.log("i got the request");
  var id = req.params.id;
  customerBikes.findById(id, function (err, bikes) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(bikes);
  });
});


router.post('/', function (req, res) {
  console.log('POST', req.body);
  var bike = customerBikes(req.body);
  bike.save(function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(201); // CREATED
  });
});

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  customerBikes.findByIdAndRemove(id, function (err) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
