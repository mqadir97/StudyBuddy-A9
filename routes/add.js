var data = require("../data.json");

exports.addClass=function(req,res){
	var ClassName = req.query.name;
	var ClassDescription = req.query.description;
	var newClass = 
	{
		"name": ClassName,
		"description": ClassDescription,
		"imageURL": "https://placebeard.it/400/400"
	}
	console.log(newClass);
	data.class.push(newClass);
	res.render('searchbar', data);
}