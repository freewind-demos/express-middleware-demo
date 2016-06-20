var express = require('express');

var app = express();

function myLogger(req, res, next) {
  console.log('LOGGED: ' + req.path);
  next();
};

app.use(myLogger);

app.get('/:name', function (req, res) {
  res.send('Hello: ' + req.params.name);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});