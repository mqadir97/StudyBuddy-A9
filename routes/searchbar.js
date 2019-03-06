var data = require('../data.json');
exports.viewSearchbar=function(req,res){
	var SearchName = req.query.name;

	console.log(SearchName);
	res.render('searchbar', data);



}

