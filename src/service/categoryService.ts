import * as mongoose from 'mongoose';
import { CategorySchema } from '../models/categoryModel';
import { Request, Response } from 'express';

const Category = mongoose.model('Category', CategorySchema);
let categoryId: string = '';
let message: string = '';

class CategoryService {
	public addNewCategory(req: Request, res: Response) {
		let newCategory = new Category(req.body);
		newCategory.save((error: Error, category: any) => {
			if (error) {
				res.send(error);
			}
			res.json(category);
		});
	}
	public async getAllCategory(req: Request, res: Response) {
		// Category.find({}, (error: Error, category: any) => {
		// 	if (error) {
		// 		res.send(error);
		// 	}
		// 	res.json(category);
		// }).populate('tagId');
		// res.send(Category);
		const category = await Category.find(
			(error: Error) => {
			if (error) {
				res.send(error);
			}}
		).populate('tagId');
		res.send(category)
	}
	public getCategoryById(req: Request, res: Response) {
		categoryId = req.params.id;
		Category.findById(categoryId, (error: Error, Category: any) => {
			if (error) {
				res.send(error);
			}
			res.json(Category);
		});
	}
	public deleteCategoryById(req: Request, res: Response) {
		categoryId = req.params.id;
		Category.findByIdAndDelete(categoryId, (error: Error, Category: any) => {
			if (error) {
				res.send(error);
			}
			message = Category
				? `Delete Category By ${categoryId} successfully`
				: `Category Id ${categoryId} Not Found`;
			res.status(200).send(message);
		});
	}
	public updateCategoryById(req: Request, res: Response) {
		categoryId = req.params.id;
		Category.findByIdAndUpdate(categoryId, req.body, (error: Error, Category: any) => {
			if (error) {
				res.send(error);
			}
			message = Category
				? `Update Category By ${categoryId} successfully`
				: `Category Id ${categoryId} Not Found`;
			res.status(200).send(message);
		});
	}
}

export default CategoryService;
