import CarpoolRequest from '../models/CarpoolRequest';
import knex from '../database/connection';

class CarpoolRequestRepository {
    tableName = "carpools_requested";

    createCarpoolRequest(carpoolRequest: CarpoolRequest){
        
    }
    async getCarpoolRequests(){
        try{
            const carpoolRequests: CarpoolRequest[] = await knex.select('*').from(this.tableName);
            return carpoolRequests;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolRequestById(id: number){
        try{
            const carpoolRequest: CarpoolRequest | undefined = await knex.select('*').from<CarpoolRequest>(this.tableName).where('id', id).first();
            return carpoolRequest;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolRequestByUserId(userId: number){
        try{
            const carpoolRequest: CarpoolRequest | undefined = await knex.select('*').from<CarpoolRequest>(this.tableName).where('user_id', userId).first();
            return carpoolRequest;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolRequestRepository;
