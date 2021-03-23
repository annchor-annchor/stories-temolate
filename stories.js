const express = require("express");
const stories = express();

var data = require("./data.json");

stories.set("view engine", "ejs");

stories.use(express.static(__dirname + "/public"));

stories.get("/", function(req, res) {

	res.render("leaders", {
		title: data[0].data.title,
		data: data[0].data
	});
});

stories.get("/slide/:slide", function(req,res) {
	
	let num = req.params.slide;

	res.render(data[num].alias, {
		title: data[num].data.title,
		subtitle: data[num].data.subtitle,
		emoji: data[num].data.emoji,
		data: data[num].data,
		users: data[num].data.users,
		categories: data[num].data.categories
	});
});

stories.listen(8080, function() {
	console.log("Server is running on port 8080.")
});