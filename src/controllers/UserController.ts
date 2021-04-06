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
    async getUserById(request: Request, response: Response) {
        const {id} = request.params;
        const numberId: number = +id;

        const userRepository = new UserRepository();
        
        const user = await userRepository.getUserById(numberId);

        return response.json(user);
    }
}
export default UserController;