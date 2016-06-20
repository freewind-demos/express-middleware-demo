var express = require('express');

var app = express();

// express.static is the only one built-in
// middleware after 4.x
app.use(express.static('public', {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});