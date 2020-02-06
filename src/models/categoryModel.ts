import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
	categoryName: {
		type: String,
		required: 'Enter category name',
		unique: true
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});
