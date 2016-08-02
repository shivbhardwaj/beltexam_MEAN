var mongoose = require('mongoose');
var User = mongoose.model('user');

module.exports = (function() {
	return {
		createUser: function(req, res){
			User.findOne({name: req.body.name}, function(err, user){
				if(err){
					console.log(err);
					console.log('error creating a user')
				}
				else {
					console.log('this is the user that I found', user);
					if(!user){
						user = new User(req.body);
						user.save(function(err, user){
							if(err){
								console.log('there was an error saving the user', err);
							} else {
								res.json(user);
							}
						})
					} else {
						res.json(user);
					}
				}
			})
		}
	}
})();
