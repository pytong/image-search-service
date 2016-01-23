"use strict";

let ImageSearch = require("../models/imageSearches");

module.exports = {
    getLatestSearches: (callback) => {
        
        ImageSearch.find({}, "term date -_id", function(err, imageSearches){
            if(err) { return callback(false, "Failed to search for images. Please try again later."); }
            callback(true, imageSearches);
        }).sort({"date": -1}).limit(10);
    },

    saveSearch: (terms, callback) => {
        let search = new ImageSearch();

        search.term = terms;
        search.date = new Date();

        search.save((err) => {
           if(err) { return callback(false, "Failed to save last search"); }
           return callback(true);
        });
    }
}