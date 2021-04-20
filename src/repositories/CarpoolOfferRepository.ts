import CarpoolOffer from '../models/CarpoolOffer';
import knex from '../database/connection';

class CarpoolOfferRepository {
    tableName = "carpools_offered";

    async createCarpoolOffer(carpoolOffer: CarpoolOffer) {
        try{
            const id = await knex(this.tableName).insert(carpoolOffer);
            return id;  
        } catch (e) {
            console.log(e);
            return e;
        }
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

    async removeVacancy(id: number){
        try{
            const carpoolOffer = await this.getCarpoolOfferById(id);
            if(carpoolOffer == undefined || carpoolOffer == null) {
                return undefined;
            }
            const vacancy = carpoolOffer.available_vacancies - 1;

            return await knex(this.tableName).update({available_vacancies: vacancy}).where('id', id);   
        } catch (e) {
            console.log(e);
            return e;
        }
    }

    async addVacancy(id: number){
        try{
            const carpoolOffer = await this.getCarpoolOfferById(id);
            if(carpoolOffer == undefined || carpoolOffer == null) {
                return undefined;
            }
            const vacancy = carpoolOffer.available_vacancies + 1;

            return await knex(this.tableName).update({available_vacancies: vacancy}).where('id', id);   
        } catch (e) {
            console.log(e);
            return e;
        }
    }
}
export default CarpoolOfferRepository;