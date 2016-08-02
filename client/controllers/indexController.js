myApp.controller('indexController', function($scope, $location, userFactory){

	// Simple method that creates a user and then redirects me to the user dashboard

	$scope.createUser = function(){
		console.log('create user function controller');
		console.log($scope.newUser);
		userFactory.addUser($scope.newUser, function(data){
			console.log(data);
			$location.path('/dashboard');
		})
	}

})
