import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import UserController from './controller/userController';

class App {

	public app: any;
	public userController: UserController;
	public mongoUrl: string = 'mongodb://localhost:27017/website_learning';

	constructor() {
		this.app = express();
		this.config();
		this.mongoSetup();

		this.userController = new UserController(this.app);
	}

	private config() {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		this.app.use(cors());
	}

	private mongoSetup() {
		mongoose.Promise = global.Promise;
		mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
	}
}

export default new App().app;
