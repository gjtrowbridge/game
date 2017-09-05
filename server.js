var express = require('express');
var server = express();

server.use(express.static(__dirname));

var port = process.env.PORT || 8020;
server.listen(port, function() {
  console.log('Server listening on port ' + port);
});