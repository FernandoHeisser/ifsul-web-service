import { Request, Response } from 'express'

class UserController {
    getUsers(request: Request, response: Response){
        return response.json({
            name: "Fernando",
            lastname: "Heisser",
            age: 21
        });
    }
}

export default UserController;
