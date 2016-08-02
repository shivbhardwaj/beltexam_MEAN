var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    _Qname:[{type: Schema.Types.ObjectId, ref: 'question'}],
    _ansBy:[{type: Schema.Types.ObjectId, ref: 'user'}],
    answer: {type: String, min: 10},
    description: {type: String, default: "n/a"},
    likes: {type: Number, default: 0},
});

mongoose.model('answer', AnswerSchema);
