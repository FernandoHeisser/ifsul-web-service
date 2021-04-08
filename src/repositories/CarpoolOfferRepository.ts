import CarpoolOffer from '../models/CarpoolOffer';
import knex from '../database/connection';

class CarpoolOfferRepository {
    tableName = "carpools_offered";

    createCarpoolOffer(carpoolOffer: CarpoolOffer) {

    }
    async getCarpoolOffers() {
        try{
            const carpoolOffers: CarpoolOffer[] = await knex.select('*').from<CarpoolOffer>(this.tableName).orderBy("start_date");
            return carpoolOffers;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolOffersFromOtherUsers(userId: number) {
        try{
            const carpoolOffers: CarpoolOffer[] = await knex.select('*').from<CarpoolOffer>(this.tableName).whereNot('user_id', userId).orderBy("start_date");
            return carpoolOffers;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolOfferById(id: number) {
        try{
            const carpoolOffer: CarpoolOffer | undefined = await knex.select('*').from<CarpoolOffer>(this.tableName).where('id', id).first();
            return carpoolOffer;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
    async getCarpoolOffersByUserId(userId: number) {
        try{
            const carpoolOffers: CarpoolOffer[] = await knex.select('*').from<CarpoolOffer>(this.tableName).where('user_id', userId).orderBy("start_date");
            return carpoolOffers;  
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolOfferRepository;