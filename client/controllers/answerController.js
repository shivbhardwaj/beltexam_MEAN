myApp.controller('answerController', function($scope, $routeParams, $location, userFactory, questionFactory, answerFactory){

	// this is an example of me passing the userFactory to multiple controllers

	// userFactory.getUser(function(user){
	// 	$scope.user = user;
	// })
	QuestID = $routeParams.id;
	questionFactory.getQuestion(QuestID, function(question){
		console.log(QuestID, 'this is the question ID that I want to show');
		console.log('this is question in showController getQuestion ', question);
		$scope.question = question;
	})
  answerFactory.getAnswer(QuestID, function(answer){
		console.log(QuestID, 'this is the answer ID that I want to show');
		console.log('this is answer in showController getAnswer ', answer);
		$scope.answer = answer;
	})


})
