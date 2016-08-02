myApp.factory('answerFactory', function($http){

	var factory = {};

	factory.createAnswer = function(info, callback){
		$http.post('/answers', info).then(function(data){
			console.log('in the createAnswer method answerFactory');
			answer = data.data;
			console.log("this is the data ", answer);
			callback(answer);
		})
	}

	factory.getAnswers= function(callback){
    console.log('made it to answerFactory getAnswers');
    $http.get('/dashboard').then(function(answers){
      console.log('back from backend, these are the answers ', answers);
      quests=answers.data;
      callback(quests);
    })
  }

	factory.getAnswer= function(QuestID, callback){
    console.log('made it to answerFactory getAnswer');
		console.log('this is the answer ID in the getAnswer method answerFactory ',  QuestID);
    $http.get('/question/'+QuestID+'/new_answer').then(function(answer){
      console.log('back from backend, these are the answer ', answer);
      quests=answer.data;
      callback(quests);
    })
  }

	return factory;
})
