import User from '../models/User';
import knex from '../database/connection';

class UserRepository {
    tableName = "users";

    async createUser(user: User) {
       try{
            const id = await knex(this.tableName).insert(user);
            return id;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getUsers() {
        try{
            const users: User[] = await knex.select('*').from(this.tableName);
            return users;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getUserById(id: number) {
        try{
            const user: User | undefined = await knex.select('*').from<User>(this.tableName).where('id', id).first();
            return user;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default UserRepository;