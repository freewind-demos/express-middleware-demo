var express = require('express');

var app = express();

// a middleware
app.use(function(err, req, res, next) {
  console.log("we have an error: " + err);
});

// a middleware bind to a path
app.get('/', function(req, res, next) {
  next('my-error');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});