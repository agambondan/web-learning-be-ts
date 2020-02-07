import * as mongoose from 'mongoose';
import { TagSchema } from '../models/tagModel';
import { Request, Response } from 'express';

const Tag = mongoose.model('Tag', TagSchema);
let tagId: string = '';
let message: string = '';

class TagService {
	public addNewTag(req: Request, res: Response) {
		let newTag = new Tag(req.body);
		newTag.save((error: Error, tag: any) => {
			if (error) {
				res.send(error);
			}
			res.json(tag);
		});
	}
	public async getAllTag(req: Request, res: Response) {
		const tag = await Tag.find(
			(error: Error) => {
			if (error) {
				res.send(error);
			}}
		).populate('categoryId').populate('articleId');
		res.send(tag)
		// Tag.find({}, (error: Error, tag: any) => {
		// 	if (error) {
		// 		res.send(error);
		// 	}
		// 	res.json(tag);
		// });
	}
	public getTagById(req: Request, res: Response) {
		tagId = req.params.id;
		Tag.findById(tagId, (error: Error, tag: any) => {
			if (error) {
				res.send(error);
			}
			res.json(tag);
		});
	}
	public deleteTagById(req: Request, res: Response) {
		tagId = req.params.id;
		Tag.findByIdAndDelete(tagId, (error: Error, tag: any) => {
			if (error) {
				res.send(error);
			}
			message = tag ? `Delete Tag By ${tagId} successfully` : `Tag Id ${tagId} Not Found`;
			res.status(200).send(message);
		});
	}
	public updateTagById(req: Request, res: Response) {
		tagId = req.params.id;
		Tag.findByIdAndUpdate(tagId, req.body, (error: Error, tag: any) => {
			if (error) {
				res.send(error);
			}
			message = tag ? `Update Tag By ${tagId} successfully` : `Tag Id ${tagId} Not Found`;
			res.status(200).send(message);
			res.json(tag);
		});
	}
}

export default TagService;
