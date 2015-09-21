var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello world!')
})

console.log('Starting....');
app.listen(3000);

