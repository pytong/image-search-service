"use strict";

let path = process.cwd(),
	imageUtil = require("../utils/imageUtil");


module.exports = (app) => {

	app.route("/api/imagesearch/:searchterms")
		.get((req, res) => {
			let searchterms = req.params.searchterms,
				offset = 1;

			imageUtil.getImages(searchterms, offset, (success, result) => {
				return res.json(true);
			});
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
