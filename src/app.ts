import express from 'express';
import bodyParser from 'body-parser';
import { UserRoutes } from './routes/userRoutes';
import mongoose from 'mongoose';

class App {
	public app: express.Application = express();
	public userRoute: UserRoutes = new UserRoutes();
	public mongoUrl: string = 'mongodb://localhost:27017/website_learning';
	// public mongoUrl: string = 'mongodb://agam:agamganteng1@localhost:27017/website_learning';

	constructor() {
		this.config();
		this.mongoSetup();
		this.userRoute.routes(this.app);
	}

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		// serving static files
		this.app.use(express.static('public'));
	}

	private mongoSetup(): void {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
	}
}

export default new App().app;
