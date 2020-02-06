import * as mongoose from 'mongoose';
import { text } from 'body-parser';

const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
	titles: {
		type: String,
		required: 'tittle cannot be empty!',
		unique: true
    },
    content: {
        type: String,
        minlength: 100,
        maxlength: 5000,
        required: 'content cannot be empty!'
    },
    tagId: {
        type: String,
        required: 'id tag cannot be empty!'
    },
	created_date: {
		type: Date,
		default: Date.now
    },
	update_date: {
		type: Date
	}
});
