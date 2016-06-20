var express = require('express');

var app = express();

// a middleware
app.use(function(req, res, next) {
  console.log("req: " + req.path);
  next();
});

// a middleware bind to a path
app.get('/', function(req, res, next) {
  console.log("Hello");
  next();
}, function(req, res) {
  res.send("World!");
});

// a middleware bind to a path
app.get('/next-route', function(req, res, next) {
  res.send("World!");
  next('route'); // will skip next handler
}, function(req, res) {
  console.log("Should not get here !!");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});