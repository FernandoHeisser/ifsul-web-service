import { Request, Response } from 'express'
import CarpoolMatchRepository from '../repositories/CarpoolMatchRepository'

class CarpoolMatchController {

    createCarpoolMatch(request: Request, response: Response){
        return response.json({
            message: "CarpoolMatchController.createCarpoolMatch"
        });
    }
    async getCarpoolMatchsById(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch = await carpoolMatchRepository.getCarpoolMatchById(numberId);

        return response.json(carpoolMatch);
    }
    async getCarpoolMatchsByCarpoolRequestId(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch = await carpoolMatchRepository.getCarpoolMatchesByCarpoolRequestId(numberId);

        return response.json(carpoolMatch);
    }
    async getCarpoolMatchsByCarpoolOfferId(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch = await carpoolMatchRepository.getCarpoolMatchesByCarpoolOfferId(numberId);

        return response.json(carpoolMatch);
    }
    async getCarpoolMatchsByCarpoolOfferIdAndCarpoolRequestId(request: Request, response: Response){
        const {offer_id, request_id} = request.params;
        const numberOfferId: number = +offer_id;
        const numberRequestId: number = +request_id;

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatchs = await carpoolMatchRepository.getCarpoolMatchByCarpoolOfferIdAndCarpoolRequestId(numberOfferId, numberRequestId);

        return response.json(carpoolMatchs);
    }
}
export default CarpoolMatchController;