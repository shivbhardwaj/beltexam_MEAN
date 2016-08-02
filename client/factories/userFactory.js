myApp.factory('userFactory', function($http){

// So in my factory I have a user variable that stores my user information. Remember
// this user variable will keep the user data up until the point where the user
// decides to refresh the page. That will be the point in which we will start to incorporate
// either sessions or JWT to persist that data past browser refreshes.

// All my getter method does is help controllers retrieve the user information from
// the factory. Remember that this user variable is a private variable, if I want
// to retrieve it I need to create a getter method that will do that.

// In the backend for addUser all I do is check to see if I have that user already saved in
// my database, usually that is done with an email like I did below for your exam, you
// would do the same thing but with a name instead. If I can find a user with this name,
// I return the user, if not I create a new user with the new information that is provided.



	var user,
		factory = {};

	factory.addUser = function(info, callback){
		$http.post('/users', info).then(function(data){
			user = data.data;
			callback(user);
		})
	}

	factory.getUser = function(callback){
		console.log('this is getting the user', user);
		callback(user);
	}

	return factory;
})
