"use strict";

let mongoose = require("mongoose"),
    Schema = mongoose.Schema,

    ImageSearch = new Schema({
        term: String,
        date: Date
    });

module.exports = mongoose.model('ImageSearch', ImageSearch);