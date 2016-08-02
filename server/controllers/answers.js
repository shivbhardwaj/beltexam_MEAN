var mongoose = require('mongoose');
var Answer = mongoose.model('answer');

module.exports = (function() {
	return {
		createAnswer: function(req, res){
  		answer = new Answer(req.body);
  		answer.save(function(err, answer){
  			if(err){
  				console.log('there was an error saving the answer', err);
  			}
        else {
  				res.json(answer);
  			}
		  })
    },
    getAnswers: function(req, res){
      console.log('we are in the getAnswers method in backend answers controller');
      Answer.find({$and:[
				{Qid: req.params.id},
				{type: req.params.type}
			]}, function(err, result){
        if(err){
          console.log('couldnt find answer in db from getAnswers in backend qestionsController', err);
        }
        else{
          console.log('this is the answer found in DB from getAnswers in backend qestionsController', result);
          res.json(result);
        }
      })
    },

    getAnswer: function(req, res){
      console.log('we are in the getAnswer method in backend answers controller');
      Answer.findOne({_id: req.params.id}, function(err, result){
        if(err){
          console.log('couldnt find a answer ', err);
        }
        else{
          console.log('this is the answer you are looking for!', result);
          res.json(result);
        }
      })
    },


  }
})();
