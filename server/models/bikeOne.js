var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// subdocument
var bikeOneSchema = new Schema({
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

var bikeOne = mongoose.model('bikeOne', bikeOneSchema);

module.exports = bikeOne;
