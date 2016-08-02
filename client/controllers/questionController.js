myApp.controller('questionController', function($scope, $location, questionFactory){

	// Simple method that creates a user and then redirects me to the user dashboard

	$scope.createQuestion = function(){
		console.log('createQuestion in question front end controller');
		console.log($scope.newQuestion);
		questionFactory. createQuestion($scope.newQuestion, function(data){
			console.log(data, 'this is the new qusetion being added to DB');
			$location.path('/dashboard');
		})
	}



})
