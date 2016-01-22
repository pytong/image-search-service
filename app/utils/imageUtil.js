"use strict";

let request = require("request"),
    configAuth = require("../config/auth");


module.exports = {

    getImages: (searchTerms, offset, callback) => {
        let key = configAuth.customSearchAuth.key,
            searchEngineId = configAuth.customSearchAuth.search_engine_id,
            url = `https://www.googleapis.com/customsearch/v1?q=cow&start=${offset}&searchType=image&cx=${searchEngineId}&key=${key}`,
            result = [];

        request(url, function (error, response, body) {
            if(error || response.statusCode != 200) {
                callback(false, "Failed to search for images.");
            }

            let items = JSON.parse(body)["items"],
                item,
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
