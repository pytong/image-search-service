"use strict";

let http = require("http"),
    configAuth = require("../config/auth");


module.exports = {

    getImages: (searchTerms, offset, callback) => {
        let key = configAuth.customSearchAuth.key,
            searchEngineId = configAuth.customSearchAuth.search_engine_id,
            url = `https://www.googleapis.com/customsearch/v1?q=cow&start=${offset}&searchType=image&cx=${searchEngineId}&key=${key}`;
            
        console.log(url);
        callback(true);
    }
}
