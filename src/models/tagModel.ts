import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TagSchema = new Schema({
	articleId: {
		type: String,
        required: 'id article cannot be empty!'
    },
    categoryId: {
        type: String,
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
