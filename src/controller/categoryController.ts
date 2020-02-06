import CategoryService from '../service/categoryService';
import { Request, Response } from 'express';

class CategoryController {
	private categoryService: CategoryService;

	constructor(private app: any) {
		this.categoryService = new CategoryService();
		this.routes();
	}

	public routes() {
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
