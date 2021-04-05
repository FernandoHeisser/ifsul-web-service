import User from '../models/User';
import knex from '../database/connection';

class UserRepository {
    tableName = "users";

    createUser(user: User) {
        
    }
    async getUsers() {
        try{
            const users: User[] = await knex(this.tableName).select('*');
            return users;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    getUserById(id: number) {
        
    }
}
export default UserRepository;