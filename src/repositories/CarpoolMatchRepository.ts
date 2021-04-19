import CarpoolMatch from '../models/CarpoolMatch';
import knex from '../database/connection';

class CarpoolMatchRepository {
    tableName = "carpool_match";

    createCarpoolMatch(carpoolMatch: CarpoolMatch) {

    }
    async getCarpoolMatchById(id: number){
        try{
            const carpoolMatches: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('id', id).andWhere('canceled', 0).first();
            return carpoolMatches;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolMatchesByCarpoolRequestId(carpoolRequestId: number){
        try{
            const carpoolMatchs: CarpoolMatch[] = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_request_id', carpoolRequestId).andWhere('canceled', 0);
            return carpoolMatchs;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolMatchesByCarpoolOfferId(carpoolOfferId: number){
        try{
            const carpoolMatchs: CarpoolMatch[] = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_offer_id', carpoolOfferId).andWhere('canceled', 0);
            return carpoolMatchs;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolMatchByCarpoolOfferIdAndCarpoolRequestId(carpoolOfferId: number, carpoolRequestId: number){
        try{
            const carpoolMatch: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_offer_id', carpoolOfferId).andWhere('carpool_request_id', carpoolRequestId).andWhere('canceled', 0).first();
            return carpoolMatch;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolMatchRepository;