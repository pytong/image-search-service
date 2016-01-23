'use strict';

let mongoose = require('mongoose'),
	Schema = mongoose.Schema,

	Url = new Schema({
		original_url: String,
		uuid: String
	});

module.exports = mongoose.model('Url', Url);