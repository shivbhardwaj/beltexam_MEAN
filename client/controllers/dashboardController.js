myApp.controller('dashboardController', function($scope, $location, userFactory, questionFactory){

	// So once the user has been saved to a variable in my factory, it is up to me
	// to retrieve that user from my factory with a getter method that I set up
	// all this method does is pass a callback to my factory that retrieves that user
	// information

	userFactory.getUser(function(user){
		$scope.user = user;
	})
	questionFactory.getQuestions(function(questions){
		console.log('this is questions in dashboardController getQuestions ', questions);
		$scope.questions = questions;
	})

})
