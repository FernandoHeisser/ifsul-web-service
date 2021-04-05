import { Request, Response } from 'express'
import UserRepository from '../repositories/UserRepository'

class UserController {

    createUser(request: Request, response: Response) {
        return response.json({
            message: "UserController.createUser"
        });
    }
    async getUsers(request: Request, response: Response) {
        const userRepository = new UserRepository();
        
        const users = await userRepository.getUsers()

        return response.json(users);
    }
    getUserById(request: Request, response: Response) {
        const {id} = request.params;

        return response.json({
            message: `UserController.getUserById(${id})`
        });
    }
}
export default UserController;