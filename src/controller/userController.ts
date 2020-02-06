import UserService from '../service/userService';
import { Request, Response } from 'express';

class UserController {
	private userService: UserService;

	constructor(private app: any) {
		this.userService = new UserService();
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

		this.app.route('/users').get(this.userService.getAllUser);

		this.app.route('/user').post(this.userService.addNewUser);

		this.app
			.route('/user/:id')
			.delete(this.userService.deleteUserById)
			.put(this.userService.updateUserById)
			.get(this.userService.getUserById);
	}
}

export default UserController;
