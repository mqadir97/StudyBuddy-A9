var data = require("../studybuddies.json");

exports.addBuddy=function(req,res){
	var BuddyName = req.query.name;
	//var ClassDescription = req.query.description;
	var newBuddy =
	{
		"name": BuddyName,
		//"description": ClassDescription,
		//"imageURL": "https://placebeard.it/400/400"
	}
	console.log(newBuddy);
	data.studybuddy.push(newBuddy);
	res.render('studybuddy', data);
}
