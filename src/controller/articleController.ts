import ArticleService from '../service/articleService';
import { Request, Response } from 'express';

class ArticleController {
	private articleService: ArticleService;

	constructor(private app: any) {
		this.articleService = new ArticleService();
		this.routes();
	}

	public routes() {
		this.app.route('/articles').get(this.articleService.getAllArticle);

		this.app.route('/article').post(this.articleService.addNewArticle);

		this.app
			.route('/article/:id')
			.delete(this.articleService.deleteArticleById)
			.put(this.articleService.updateArticleById)
			.get(this.articleService.getArticleById);
	}
}

export default ArticleController;
