import CarpoolOffer from '../models/CarpoolOffer';
import knex from '../database/connection';

class CarpoolOfferRepository {
    tableName = "carpools_offered";

    createCarpoolOffer(carpoolOffer: CarpoolOffer) {

    }
    async getCarpoolOffers() {
        try{
            const carpoolOffers: CarpoolOffer[] = await knex.select('*').from<CarpoolOffer>(this.tableName).where('canceled', 0).orderBy("start_date");
            return carpoolOffers;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolOffersFromOtherUsers(userId: number) {
        try{
            const carpoolOffers: CarpoolOffer[] = await knex.select('*').from<CarpoolOffer>(this.tableName).whereNot('user_id', userId).andWhere('canceled', 0).orderBy("start_date");
            return carpoolOffers;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolOfferById(id: number) {
        try{
            const carpoolOffer: CarpoolOffer | undefined = await knex.select('*').from<CarpoolOffer>(this.tableName).where('id', id).andWhere('canceled', 0).first();
            return carpoolOffer;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolOffersByUserId(userId: number) {
        try{
            const carpoolOffers: CarpoolOffer[] = await knex.select('*').from<CarpoolOffer>(this.tableName).where('user_id', userId).andWhere('canceled', 0).orderBy("start_date");
            return carpoolOffers;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async cancelCarpoolOffer(id: number){
        try{
            return await knex(this.tableName).update({canceled: 1}).where('id', id);   
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolOfferRepository;