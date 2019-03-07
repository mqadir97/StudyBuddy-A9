var data = require('../data.json');
exports.viewAlternative=function(req,res){
  var SearchName = req.query.name;

  console.log(SearchName);
  res.render('alternative', data);



}
