import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TagSchema = new Schema({
	articleId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article',
		required: 'id article cannot be empty!'
	},
	categoryId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: 'id category cannot be empty!'
	},
	created_date: {
		type: Date,
		default: Date.now
	},
	update_date: {
		type: Date
	}
});
