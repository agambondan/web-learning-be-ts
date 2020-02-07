import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
	articleId: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	}],
	firstName: {
		type: String,
		required: 'Enter your first name',
	},
	lastName: {
		type: String,
		required: 'Enter your last name'
	},
	email: {
		type: String,
		required: 'Enter your email',
		unique: true
	},
	phone: {
		type: String,
		required: 'Enter your phone number'
	},
	username: {
		type: String,
		required: 'Enter your username',
		unique: true
	},
	password: {
		type: String,
		required: 'Enter your password'
	},
	role: {
		type: String,
		required: 'Enter your role'
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	update_date: {
		type: Date,
		default: Date.now
	}
});
