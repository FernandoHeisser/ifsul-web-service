import { Request, Response } from 'express'

class UserController {

    createUser(request: Request, response: Response){
        return response.json({
            message: "UserController.createUser"
        });
    }
    getUsers(request: Request, response: Response){
        return response.json({
            message: "UserController.getUsers"
        });
    }
    getUserById(request: Request, response: Response){
        const {id} = request.params;

        return response.json({
            message: `UserController.getUserById(${id})`
        });
    }
}

export default UserController;
