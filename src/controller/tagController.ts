import TagService from '../service/tagService';
import { Request, Response } from 'express';

class TagController {
	private tagService: TagService;

	constructor(private app: any) {
		this.tagService = new TagService();
		this.routes();
	}

	public routes() {
		this.app.route('/tags').get(this.tagService.getAllTag);

		this.app.route('/tag').post(this.tagService.addNewTag);

		this.app
			.route('/tag/:id')
			.delete(this.tagService.deleteTagById)
			.put(this.tagService.updateTagById)
			.get(this.tagService.getTagById);
	}
}

export default TagController;
