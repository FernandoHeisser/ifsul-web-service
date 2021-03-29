import express, { request } from 'express'
import UserController from './controllers/UserController'

const routes = express.Router();
const userController = new UserController;

routes.get('/users', userController.getUsers);

export default routes;