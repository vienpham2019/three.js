const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String, 
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true 
    }
},{
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

module.exports = User