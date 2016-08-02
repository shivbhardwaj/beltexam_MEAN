var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    name: String
});

mongoose.model('user', UserSchema);
// Validations
UserSchema.path('name').required(true, 'Name cannot be blank');
