var mongoose = require('mongoose');
var Question = mongoose.model('question');

module.exports = (function() {
	return {
		createQuestion: function(req, res){
  		question = new Question(req.body);
  		question.save(function(err, question){
  			if(err){
  				console.log('there was an error saving the question', err);
  			}
        else {
  				res.json(question);
  			}
		  })
    },
    getQuestions: function(req, res){
      console.log('we are in the getQuestions method in backend questions controller');
      Question.find(function(err, result){
        if(err){
          console.log('couldnt find question in db from getQuestions in backend qestionsController', err);
        }
        else{
          console.log('this is the question found in DB from getQuestions in backend qestionsController', result);
          res.json(result);
        }
      })
    },

    getQuestion: function(req, res){
      console.log('we are in the getQuestion method in backend questions controller');
      Question.findOne({_id: req.params.id}, function(err, result){
        if(err){
          console.log('couldnt find a question ', err);
        }
        else{
          console.log('this is the question you are looking for!', result);
          res.json(result);
        }
      })
    },

  }
})();
