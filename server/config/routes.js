var user = require('./../controllers/users.js');
var question = require('./../controllers/questions.js');

module.exports = function(app){
	app.post('/users', function(req, res){
		user.createUser(req, res);
	})
	app.get('/new_question', function(req, res){
		console.log('made it to my new_question route');
		question.createQuestion(req, res);
	})
	app.get('/dashboard', function(req, res){
		console.log('made it to my dashboard route to getQuestions method');
		question.getQuestions(req, res);
	})
	app.get('/question/:id', function(req, res){
		console.log('made it to my /qusetion/:id route to getQuestion method');
		question.getQuestion(req, res);
	})
	app.post('/questions', function(req, res){
		question.createQuestion(req, res);
	})
	app.get('/question/{{q._id}}/new_answer', function(req, res){
		console.log('made it to my new /answer/:id route');
		question.createAnswer(req, res);
	})
}
