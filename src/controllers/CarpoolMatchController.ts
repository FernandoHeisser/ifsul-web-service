import { Request, Response } from 'express'
import CarpoolMatch from '../models/CarpoolMatch';
import CarpoolMatchRepository from '../repositories/CarpoolMatchRepository'
import CarpoolOfferRepository from '../repositories/CarpoolOfferRepository'

class CarpoolMatchController {

    async createCarpoolMatch(request: Request, response: Response){
        const carpoolMatchRepository = new CarpoolMatchRepository();

        const carpoolMatchId = await carpoolMatchRepository.createCarpoolMatch(request.body);
        
        return response.json(carpoolMatchId);
    }

    async getCarpoolMatchById(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch: CarpoolMatch | undefined = await carpoolMatchRepository.getCarpoolMatchById(parseInt(id));

        if(carpoolMatch === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolMatch);
    }

    async getCarpoolMatchesByCarpoolRequestId(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatches: CarpoolMatch[] = await carpoolMatchRepository.getCarpoolMatchByCarpoolRequestId(parseInt(id));

        if(carpoolMatches === undefined || carpoolMatches.length === 0){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolMatches);
    }

    async getCarpoolMatchesByCarpoolOfferId(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatches: CarpoolMatch[] = await carpoolMatchRepository.getCarpoolMatchByCarpoolOfferId(parseInt(id));

        if(carpoolMatches === undefined || carpoolMatches.length === 0){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolMatches);
    }

    async getCarpoolMatchByCarpoolOfferIdAndCarpoolRequestId(request: Request, response: Response){
        const {offer_id, request_id} = request.params;

        if(isNaN(parseInt(offer_id)) || !isFinite(parseInt(offer_id)) || isNaN(parseInt(request_id)) || !isFinite(parseInt(request_id)) ){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const carpoolMatch: CarpoolMatch | undefined = await carpoolMatchRepository.getCarpoolMatchByCarpoolOfferIdAndCarpoolRequestId(parseInt(offer_id), parseInt(request_id));

        if(carpoolMatch === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolMatch);
    }

    async acceptCarpoolMatch(request: Request, response: Response){
        const {offer_id, request_id} = request.params;

        if(isNaN(parseInt(offer_id)) || !isFinite(parseInt(offer_id)) || isNaN(parseInt(request_id)) || !isFinite(parseInt(request_id)) ){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolMatchRepository = new CarpoolMatchRepository();
        
        const status = await carpoolMatchRepository.acceptCarpoolMatch(parseInt(offer_id), parseInt(request_id));
        
        if(status === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        } else {
            const carpoolOfferRepository = new CarpoolOfferRepository();
            await carpoolOfferRepository.removeVacancy(parseInt(offer_id));
        }
        return response.json(status);
    }
}
export default CarpoolMatchController;