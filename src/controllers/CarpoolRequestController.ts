import { Request, Response } from 'express'
import CarpoolMatch from '../models/CarpoolMatch';
import CarpoolRequest from '../models/CarpoolRequest';
import CarpoolMatchRepository from '../repositories/CarpoolMatchRepository';
import CarpoolOfferRepository from '../repositories/CarpoolOfferRepository';
import CarpoolRequestRepository from '../repositories/CarpoolRequestRepository'

class CarpoolRequestController {

    async createCarpoolRequest(request: Request, response: Response){
        const carpoolRequestRepository = new CarpoolRequestRepository();

        const carpoolRequestId = await carpoolRequestRepository.createCarpoolRequest(request.body);
        
        return response.json(carpoolRequestId);
    }

    async getCarpoolRequests(request: Request, response: Response){
        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequests: CarpoolRequest[] = await carpoolRequestRepository.getCarpoolRequests();

        if(carpoolRequests === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolRequests);
    }
    
    async getCarpoolRequestsFromOtherUsers(request: Request, response: Response){
        const {id} = request.params;

        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }
        
        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequests: CarpoolRequest[] = await carpoolRequestRepository.getCarpoolRequestsFromOtherUsers(parseInt(id));

        if(carpoolRequests === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolRequests);
    }

    async getCarpoolRequestById(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequest: CarpoolRequest = await carpoolRequestRepository.getCarpoolRequestById(parseInt(id));

        if(carpoolRequest === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolRequest);
    }

    async getCarpoolRequestsByUserId(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequests: CarpoolRequest[] = await carpoolRequestRepository.getCarpoolRequestsByUserId(parseInt(id));

        if(carpoolRequests === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolRequests);
    }

    async cancelCarpoolRequest(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolRequestRepository = new CarpoolRequestRepository();
        const status = await carpoolRequestRepository.cancelCarpoolRequest(parseInt(id));
        
        const carpoolMatchRepository = new CarpoolMatchRepository();
        const matches: CarpoolMatch[] = await carpoolMatchRepository.getCarpoolMatchByCarpoolRequestId(parseInt(id));
        
        if(matches !== undefined && matches.length !== 0) {
            matches.map(async match => {
                if(match.id !== undefined) {
                    await carpoolMatchRepository.cancelCarpoolMatch(match.id);
                    if(match.accepted) {
                        const carpoolOfferRepository = new CarpoolOfferRepository();
                        await carpoolOfferRepository.addVacancy(match.carpool_offer_id);
                    }
                }

            });
        } 
        
        return response.json(status);
    }
}
export default CarpoolRequestController;