"use strict";

let path = process.cwd(),
	imageUtil = require("../utils/imageUtil");


module.exports = (app) => {

	app.route("/api/imagesearch/:searchterms")
		.get((req, res) => {
			let searchterms = req.params.searchterms,
				offset = req.params.offset || 1;

			imageUtil.getImages(searchterms, offset, (success, result) => {
				res.json(result);
			});
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
