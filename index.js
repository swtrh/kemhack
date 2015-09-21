var express = require('express');
var app = express();

var port = (process.env.PORT || '3000');
app.get('/', function(req, res) {
	res.send('Hello world!')
})

console.log('Start listening on port '+port+'....');
app.listen(port);

