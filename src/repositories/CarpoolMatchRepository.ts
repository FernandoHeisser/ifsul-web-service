import CarpoolMatch from '../models/CarpoolMatch';
import knex from '../database/connection';

class CarpoolMatchRepository {
    tableName = "carpool_match";

    async createCarpoolMatch(carpoolMatch: CarpoolMatch) {
        try{
            const id = await knex(this.tableName).insert(carpoolMatch);
            return id;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async getCarpoolMatchById(id: number){
        try{
            const carpoolMatch: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('id', id).andWhere('canceled', 0).first();
            return carpoolMatch;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async getCarpoolMatchByCarpoolRequestId(carpoolRequestId: number){
        try{
            const carpoolMatch: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_request_id', carpoolRequestId).andWhere('canceled', 0).first();
            return carpoolMatch;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async getCarpoolMatchByCarpoolOfferId(carpoolOfferId: number){
        try{
            const carpoolMatch: CarpoolMatch | undefined = await knex.select('*').from<CarpoolMatch>(this.tableName).where('carpool_offer_id', carpoolOfferId).andWhere('canceled', 0).first();
            return carpoolMatch;  
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

    async cancelCarpoolMatch(id: number){
        try{
            return await knex(this.tableName).update({canceled: 1}).where('id', id);
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async acceptCarpoolMatch(carpoolOfferId: number, carpoolRequestId: number){
        try{
            const status = await knex(this.tableName).update({accepted: 1}).where('carpool_offer_id', carpoolOfferId).andWhere('carpool_request_id', carpoolRequestId);
            return status;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolMatchRepository;