var data = require('../studybuddies.json');

exports.viewStudybuddy=function(req,res){

	res.render('studybuddy', data);
}
