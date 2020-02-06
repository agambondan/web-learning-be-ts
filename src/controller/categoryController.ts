import CategoryService from '../service/categoryService';
import { Request, Response } from 'express';

class CategoryController {
	private categoryService: CategoryService;

	constructor(private app: any) {
		this.categoryService = new CategoryService();
		this.routes();
	}

	public routes() {
		this.app.route('/').get((req: Request, res: Response) => {
			console.log(`Request from: ${req.originalUrl}`);
			console.log(`Request type: ${req.method}`);
			res.status(200).send({
				message: 'GET request successfully!!!!'
			});
		});

		this.app.route('/categories').get(this.categoryService.getAllCategory);

		this.app.route('/category').post(this.categoryService.addNewCategory);

		this.app
			.route('/category/:id')
			.delete(this.categoryService.deleteCategoryById)
			.put(this.categoryService.updateCategoryById)
			.get(this.categoryService.getCategoryById);
	}
}

export default CategoryController;
