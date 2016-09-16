var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var index = require('./routes/index');
var bikesAndCustomers = require('./routes/savedCustomers');

//var dataRoute = require('./routes/data');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//express routes
app.use(express.static(path.join(__dirname, './public')));

//mongoose cannection
var databaseUri = 'mongodb://localhost:27017/omicron';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose failed to connect because error: ', err);
});

//server
app.use('/bikes', bikesAndCustomers);
app.use('/', index);

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './public/views/index.html'));
// })


app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
