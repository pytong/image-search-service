"use strict";

let request = require("request"),
    configAuth = require("../config/auth");


module.exports = {

    getImages: (searchTerms, offset, callback) => {
        let key = configAuth.customSearchAuth.key,
            searchEngineId = configAuth.customSearchAuth.search_engine_id,
            url = `https://www.googleapis.com/customsearch/v1?q=${searchTerms}&start=${offset}&searchType=image&cx=${searchEngineId}&key=${key}`,
            result = [];

        request(url, function (error, response, body) {
            let items = JSON.parse(body)["items"];

            if(error || response.statusCode != 200 || typeof(items) === "undefined") {
                return callback(false, "Failed to search for images.");
            }

            let item,
                returnedItem;

            for(let i = 0; i < items.length; i++) {
                returnedItem = {};
                item = items[i];

                returnedItem.url = item.link;
                returnedItem.snippet = item.snippet;
                returnedItem.thumbnail = item.image.thumbnailLink;
                returnedItem.context = item.image.contextLink;

                result.push(returnedItem);
            }
            
            callback(true, result);
        })

    }
}
