import * as mongoose from 'mongoose';
import { text } from 'body-parser';

const Schema = mongoose.Schema;

export const ArticleSchema = new Schema({
    tagId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
		required: 'id user cannot be empty!'
    },
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
	created_date: {
		type: Date,
		default: Date.now
    },
	update_date: {
		type: Date
	}
});
