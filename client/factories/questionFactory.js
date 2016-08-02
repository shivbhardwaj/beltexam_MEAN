myApp.factory('questionFactory', function($http){

	var factory = {};

	factory.createQuestion = function(info, callback){
		$http.post('/questions', info).then(function(data){
			console.log('in the createQuestion method questionFactory');
			question = data.data;
			console.log("this is the data ", question);
			callback(question);
		})
	}

	factory.getQuestions= function(callback){
    console.log('made it to questionFactory getQuestions');
    $http.get('/dashboard').then(function(questions){
      console.log('back from backend, these are the questions ', questions);
      quests=questions.data;
      callback(quests);
    })
  }

	factory.getQuestion= function(QuestID, callback){
    console.log('made it to questionFactory getQuestion');
		console.log('this is the question ID in the getQuestion method questionFactory ',  QuestID);
    $http.get('/question/'+QuestID).then(function(question){
      console.log('back from backend, these are the question ', question);
      quests=question.data;
      callback(quests);
    })
  }

	return factory;
})
