var myApp = angular.module('Myapp', ['ngRoute']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.



// this is our router. You can choose to set your controllers on the partial
// but I prefer to set my controllers here because it's cleaner
(function(){
	myApp.config(function($routeProvider){
		$routeProvider
			.when('/',
			{
				controller: 'indexController',
				templateUrl: "partials/index.html"
			})
			.when('/dashboard',
			{
				controller: 'dashboardController',
				templateUrl: "partials/dashboard.html"
			})
			.when('/question/:id',
			{
				controller: 'showController',
				templateUrl: "partials/show.html"
			})
			.when('/question/:id/new_answer',
			{
				controller: 'answerController',
				templateUrl: "partials/new_answer.html"
			})
			.when('/new_question',
			{
				controller: 'questionController',
				templateUrl: "partials/new_question.html"
			})
	})
}());
