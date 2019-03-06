var frnds = require("../friends.json");

exports.addFrnds=function(req,res){
	var FrndsName = req.query.name;

	console.log(FrndsName);

	res.render('frnds', frnds);

}