import {Request, Response, NextFunction} from 'express';
import {UserController} from '../controllers/userController';

export class UserRoutes {
    public UserController: UserController = new UserController();

    // @ts-ignore
    public routes(app): void {
        app.route('/').get((req: Request, res: Response) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            res.status(200).send({
                message: 'GET request successfully!!!!'
            });
        });

        app.route('/users').get((req: Request, res: Response) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
        }, this.UserController.getUsers);

        app.route('/user').post((req: Request, res: Response) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            res.status(200).send({
                message: 'GET request successfully!!!!'
            });
        }, this.UserController.addNewUser);

        app.route('/user/:UserId')
            .get((req: Request, res: Response) => {
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                res.status(200).send({
                    message: 'GET request successfully!!!!'
                });
            }, this.UserController.getUserWithID)
            .put((req: Request, res: Response) => {
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                res.status(200).send({
                    message: 'GET request successfully!!!!'
                });
            }, this.UserController.updateUser)
            .delete((req: Request, res: Response) => {
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                res.status(200).send({
                    message: 'GET request successfully!!!!'
                });
            }, this.UserController.deleteUser);
    }
}
