var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bikeOne = require('./bikeOne').schema;
// var bikeTwo = require('./bikeTwo').schema;
// var bikeCompData = require('./CompData').schema;

var custAndBikesSchema = new Schema({
  firstName: String ,
  lastName: String,
  phoneNumber: String,
  emailAddress: String,
  bikeOneInfo: Object,
  bikeTwoInfo: Object,
  bikeCompInfo: Object
});

var custAndBikes = mongoose.model('custAndBikes', custAndBikesSchema);

module.exports = custAndBikes;
