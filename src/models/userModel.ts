import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your first name'
    },
    lastName: {
        type: String,
        required: 'Enter your last name'
    },
    email: {
        type: String,
        required: 'Enter your email'         
    },
    phone: {
        type: Number,
        required: 'Enter your phone number'         
    },
    username: {
        type: String,
        required: 'Enter your username',
        unique: true
    },
    password: {
        type: String,
        required: 'Enter your password',
        unique: true
    },
    role: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    update_date:{
        type: Date,
        default: Date.now
    }
});