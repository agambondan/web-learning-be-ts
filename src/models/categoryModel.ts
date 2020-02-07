import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const CategorySchema = new Schema({
	tagId: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tag',
	}],
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
