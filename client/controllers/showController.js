myApp.controller('showController', function($scope, $routeParams, $location, userFactory, questionFactory){

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


})
