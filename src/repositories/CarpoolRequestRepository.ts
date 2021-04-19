import CarpoolRequest from '../models/CarpoolRequest';
import knex from '../database/connection';

class CarpoolRequestRepository {
    tableName = "carpools_requested";

    createCarpoolRequest(carpoolRequest: CarpoolRequest){
        
    }
    async getCarpoolRequests(){
        try{
            const carpoolRequests: CarpoolRequest[] = await knex.select('*').from<CarpoolRequest>(this.tableName).where('canceled', 0).orderBy("start_date");
            return carpoolRequests;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolRequestsFromOtherUsers(userId: number) {
        try{
            const carpoolRequests: CarpoolRequest[] = await knex.select('*').from<CarpoolRequest>(this.tableName).whereNot('user_id', userId).andWhere('canceled', 0).orderBy("start_date");
            return carpoolRequests;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolRequestById(id: number){
        try{
            const carpoolRequest: CarpoolRequest | undefined = await knex.select('*').from<CarpoolRequest>(this.tableName).where('id', id).andWhere('canceled', 0).first();
            return carpoolRequest;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolRequestsByUserId(userId: number){
        try{
            const carpoolRequests: CarpoolRequest[] = await knex.select('*').from<CarpoolRequest>(this.tableName).where('user_id', userId).andWhere('canceled', 0).orderBy("start_date");
            return carpoolRequests;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async cancelCarpoolRequest(id: number){
        try{
            return await knex(this.tableName).update({canceled: 1}).where('id', id);   
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolRequestRepository;