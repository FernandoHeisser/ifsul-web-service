import { Request, Response } from 'express'
import User from '../models/User';
import UserRepository from '../repositories/UserRepository'

class UserController {

    createUser(request: Request, response: Response) {
        return response.json({
            message: "UserController.createUser"
        });
    }
    
    async getUsers(request: Request, response: Response) {
        const userRepository = new UserRepository();
        
        const users: User[] = await userRepository.getUsers()

        if(users === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(users);
    }

    async getUserById(request: Request, response: Response) {
        const {id} = request.params;

        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const userRepository = new UserRepository();
        
        const user: User = await userRepository.getUserById(parseInt(id));
        
        if(user === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(user);
    }

    badRequest(request: Request, response: Response) {
        return response.json({status:"Bad request"});
    }
}
export default UserController;