var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// load 3rd party middlewares
app.use(cookieParser());
app.use(bodyParser.json());

app.get('/cookie', function (req, res) {
  res.send('Cookies ' + JSON.stringify(req.cookies));
});

app.post('/json', function (req, res) {
  res.send('Post data: ' + JSON.stringify(req.body));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

