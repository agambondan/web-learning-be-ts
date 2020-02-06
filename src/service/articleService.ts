import * as mongoose from 'mongoose';
import { ArticleSchema } from '../models/articleModel';
import { Request, Response } from 'express';

const Article = mongoose.model('Article', ArticleSchema);
let articleId: string = '';
let message: string = '';

class ArticleService {
	public addNewArticle(req: Request, res: Response) {
		let newArticle = new Article(req.body);
		newArticle.save((error: Error, article: any) => {
			if (error) {
				res.send(error);
			}
			res.json(article);
		});
	}
	public getAllArticle(req: Request, res: Response) {
		Article.find({}, (error: Error, article: any) => {
			if (error) {
				res.send(error);
			}
			res.json(article);
		});
	}
	public getArticleById(req: Request, res: Response) {
		articleId = req.params.id;
		Article.findById(articleId, (error: Error, article: any) => {
			if (error) {
				res.send(error);
			}
			res.json(article);
		});
	}
	public deleteArticleById(req: Request, res: Response) {
		articleId = req.params.id;
		Article.findByIdAndDelete(articleId, (error: Error, article: any) => {
			if (error) {
				res.send(error);
			}
			message = article
				? `Delete Article By ${articleId} successfully`
				: `Article Id ${articleId} Not Found`;
			res.status(200).send(message);
		});
	}
	public updateArticleById(req: Request, res: Response) {
		articleId = req.params.id;
		Article.findByIdAndUpdate(articleId, req.body, (error: Error, article: any) => {
			if (error) {
				res.send(error);
			}
			message = article
				? `Update Article By ${articleId} successfully`
				: `Article Id ${articleId} Not Found`;
			res.status(200).send(message);
		});
	}
}

export default ArticleService;
