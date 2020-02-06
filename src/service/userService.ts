import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);
let userId: string = '';
let message: string = '';

class UserService {
	public addNewUser(req: Request, res: Response) {
		let newUser = new User(req.body);
		newUser.save((error: Error, user: any) => {
			if (error) {
				res.send(error);
			}
			res.json(user);
		});
	}
	public getAllUser(req: Request, res: Response) {
		User.find({}, (error: Error, user: any) => {
			if (error) {
				res.send(error);
			}
			res.json(user);
		});
	}
	public getUserById(req: Request, res: Response) {
		// const id = req.params.id;
		userId = req.params.id;
		User.findById(userId, (error: Error, user: any) => {
			if (error) {
				res.send(error);
			}
			res.json(user);
		});
	}
	public deleteUserById(req: Request, res: Response) {
		userId = req.params.id;
		User.findByIdAndDelete(userId, (error: Error, user: any) => {
			if (error) {
				res.send(error);
			}
			message = user ? `Delete User By ${userId} successfully` : `User Id ${userId} Not Found`;
			res.status(200).send(message);
		});
	}
	public updateUserById(req: Request, res: Response) {
		userId = req.params.id;
		User.findByIdAndUpdate(userId, req.body, (error: Error, user: any) => {
			if (error) {
				res.send(error);
			}
			message = user ? `Update User By ${userId} successfully` : `User Id ${userId} Not Found`;
			res.status(200).send(message);
		});
	}
}

export default UserService;
