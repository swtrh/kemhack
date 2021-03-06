var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var mongoURL = 'mongodb://messagewriter:'+(process.env.DBPASSWORD || 'empty')+'@ds040888.mongolab.com:40888/kemhack';


/* GET store page. */
router.get('/', function(req, res, next) {
  res.render('store', { title: 'Store', messageURL: process.env.MESSAGE_URL });
});


router.route('/message')
	.post(function (req, res, next) {
		var txtMessage = (req.body.message || 'empty message');
		// Storing message in database
		MongoClient.connect(mongoURL, function(err, db) {
			console.log("Connected to database");

			db.collection('messages').insert({'message': txtMessage}, {w: 1 }, function (err, item) {
			if (err) {
				console.log('Error storing message in database: ' + err);
				db.close();
				res.status(400).send('Error, unable to store message: ' + txtMessage);
			} else {
				db.close();
				console.log('Message stored ok in database. New document: ' + txtMessage)
				res.status(200).send('Message stored. : "' + txtMessage + '"');
			}
		});
	});
// End storing message in database
});

module.exports = router;
