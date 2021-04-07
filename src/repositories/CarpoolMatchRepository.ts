import CarpoolMatch from '../models/CarpoolMatch';
import knex from '../database/connection';

class CarpoolMatchRepository {
    tableName = "carpool_match";

    createCarpoolMatch(carpoolMatch: CarpoolMatch) {

    }
    async getCarpoolMatchsById(id: number){
        try{
            const carpoolMatches: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('id', id).first();
            return carpoolMatches;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolMatchsByCarpoolRequestId(carpoolRequestId: number){
        try{
            const carpoolMatch: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_request_id', carpoolRequestId).first();
            return carpoolMatch;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolMatchsByCarpoolOfferId(carpoolOfferId: number){
        try{
            const carpoolMatch: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_offer_id', carpoolOfferId).first();
            return carpoolMatch;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolMatchRepository;