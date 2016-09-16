var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// subdocument
var bikeCompDataSchema = new Schema({
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

var bikeCompData = mongoose.model('bikeCompData', bikeCompDataSchema);

module.exports = bikeCompData;
