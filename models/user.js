let mongoose = require('mongoose');
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        email: {
            type: String,
            unique: true,
      
        },
        password: {
            type: String,
            
            enum: ['admin', 'employee'],
        },
    }),
    let user = mongoose.model('user', userSchema);
    module.exports = {user}     ;