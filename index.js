var express = require('express'),
	fs = require('fs'),
	randomWords = require('random-words'),
	app = express();

// respond with documentation on the homepage
app.get('/', function (req, res) {
	fs.readFile('README.md', function (err, page) {
		res.write(page);
		res.end();
	});
});

// accept GET request at /RandomNumber
app.get('/RandomNumber', function (req, res) {
	res.send(String(Math.floor((Math.random() * 100000) + 0)));
});

// accept get request at /RandomWord
app.get('/RandomWord', function (req, res) {
	if (req.query.numberOfWords) {
		res.send(randomWords({
			exactly: parseInt(req.query.numberOfWords),
			join: ' '
		}));
	} else {
		res.send(randomWords());
	}
});

// accept get request at /GenerateEmailAddresses
app.get('/GenerateEmailAddresses', function (req, res) {
	if (req.query.numOfAddresses && req.query.localPart && req.query.domain) {

		var response;

		for (var i = 0; i < parseInt(req.query.numOfAddresses); i++) {
			response += req.query.localPart + String(i + 1) + '@' + req.query.domain + '<br/>';
		}

		res.send(response);
	} else {
		res.status(400).send('Required parameters were not passed into API.');
	}
});

// start server on port 8080
var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
