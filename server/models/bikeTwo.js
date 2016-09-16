var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// subdocument
var bikeTwoSchema = new Schema({
  toptubeLength: Number,
  headtubeAngle: Number,
  headtubeLength: Number,
  effectiveToptube: Number,
  bbHeight: Number,
  wheelBase: Number,
  seattubeLength: Number,
  seattubeAngle: Number,
  chainstayLength: Number,
  reach: Number,
});

var bikeTwo = mongoose.model('bikeTwo', bikeTwoSchema);

module.exports = bikeTwo;
