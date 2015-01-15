'use strict';

var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;

  var server = require('http').Server(app);

server.listen(port, function() {
  console.log('Server listening on port ' + port);
});
