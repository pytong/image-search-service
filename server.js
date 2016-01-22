'use strict';

require('dotenv').load(); // Only required for running locally

let express = require('express'),
	routes = require('./app/routes/index.js'),
	mongoose = require('mongoose'),
	app = express();

mongoose.connect(process.env.MONGO_URI);

app.use('/public', express.static('public'));
app.use('/', express.static('app'));

routes(app);

let port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});