const mongoose = require('mongoose');

const PasswordSchema = {
    password:{type: String, requied: true},
    createdAt:String,
    updatedAt:String
}
const Password = mongoose.model('Password', PasswordSchema);

module.exports = Password;