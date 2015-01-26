var express = require('express');
var app 		= express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.redner('pages/index');
});

app.get('/about', function(req, res) {
	res.render('pages/about');
});

app.listen(8080);
console.log('Listening on port 8080');