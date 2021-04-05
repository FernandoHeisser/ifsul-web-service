import CarpoolMatch from '../models/CarpoolMatch';
import knex from '../database/connection';

class CarpoolMatchRepository {
    tableName = "carpool_match";

    createCarpoolMatch(carpoolMatch: CarpoolMatch) {

    }
    getCarpoolMatchsById(id: number){
        
    }
    getCarpoolMatchsByCarpoolRequestId(carpoolRequestId: number){
        
    }
    getCarpoolMatchsByCarpoolOfferId(carpoolOfferId: number){
        
    }
}
export default CarpoolMatchRepository;