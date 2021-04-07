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
        
        const carpoolMatch = await carpoolMatchRepository.getCarpoolMatchsById(numberId);

        return response.json(carpoolMatch);
    }
    async getCarpoolMatchsByCarpoolRequestId(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch = await carpoolMatchRepository.getCarpoolMatchsByCarpoolRequestId(numberId);

        return response.json(carpoolMatch);
    }
    async getCarpoolMatchsByCarpoolOfferId(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch = await carpoolMatchRepository.getCarpoolMatchsByCarpoolOfferId(numberId);

        return response.json(carpoolMatch);
    }
}
export default CarpoolMatchController;