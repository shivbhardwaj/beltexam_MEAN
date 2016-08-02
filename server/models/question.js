var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
    name: {type: String, min: 10, required: true},
    description: String,
    count: {type: Number, default: 0}
});

mongoose.model('question', QuestionSchema);
