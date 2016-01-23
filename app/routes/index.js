"use strict";

let path = process.cwd(),
	imageUtil = require("../utils/imageUtil"),
	searchUtil = require("../utils/searchUtil");


module.exports = (app) => {

	app.route("/api/imagesearch/:searchterms")
		.get((req, res) => {
			let searchterms = req.params.searchterms,
				offset = req.query.offset || 1;

			imageUtil.getImages(searchterms, offset, (success, result) => {
				if(success === false) {
					res.json({"error": result});
				} else {
					res.json(result);
				}
			});

			searchUtil.saveSearch(searchterms, (success, result) => {
				// can't save sesarch, do nothing
			})
		});

	app.route("/api/latest/imagesearch")
		.get((req, res) => {
			searchUtil.getLatestSearches((success, result) => {
				if(success === false) {
					res.json({"error": result});
				} else {
					res.json(result);
				}
			});
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
