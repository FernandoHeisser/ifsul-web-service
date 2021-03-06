import { Request, Response } from 'express'
import CarpoolMatch from '../models/CarpoolMatch';
import CarpoolOffer from '../models/CarpoolOffer';
import CarpoolMatchRepository from '../repositories/CarpoolMatchRepository';
import CarpoolOfferRepository from '../repositories/CarpoolOfferRepository';

class CarpoolOfferController {

    async createCarpoolOffer(request: Request, response: Response) {
        const carpoolOfferRepository = new CarpoolOfferRepository();

        const carpoolOfferId = await carpoolOfferRepository.createCarpoolOffer(request.body);
        
        return response.json(carpoolOfferId);
    }

    async getCarpoolOffers(request: Request, response: Response) {
        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffers: CarpoolOffer[] = await carpoolOfferRepository.getCarpoolOffers();

        if(carpoolOffers === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolOffers);
    }

    async getCarpoolOffersFromOtherUsers(request: Request, response: Response) {
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffers: CarpoolOffer[] = await carpoolOfferRepository.getCarpoolOffersFromOtherUsers(parseInt(id));

        if(carpoolOffers === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolOffers);
    }

    async getCarpoolOfferById(request: Request, response: Response) {
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffer: CarpoolOffer[] = await carpoolOfferRepository.getCarpoolOfferById(parseInt(id));

        if(carpoolOffer === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolOffer);
    }

    async getCarpoolOffersByUserId(request: Request, response: Response) {
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffers: CarpoolOffer[] = await carpoolOfferRepository.getCarpoolOffersByUserId(parseInt(id));

        if(carpoolOffers === undefined){
            response.status(404);
            return response.json({status:"Not found"});
        }
        return response.json(carpoolOffers);
    }

    async cancelCarpoolOffer(request: Request, response: Response){
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolOfferRepository = new CarpoolOfferRepository();
        const status = await carpoolOfferRepository.cancelCarpoolOffer(parseInt(id));
        
        const carpoolMatchRepository = new CarpoolMatchRepository();
        const matches: CarpoolMatch[] = await carpoolMatchRepository.getCarpoolMatchByCarpoolOfferId(parseInt(id));
        
        if(matches !== undefined && matches.length !== 0) {
            matches.map(async match => {
                if(match.id !== undefined)
                    await carpoolMatchRepository.cancelCarpoolMatch(match.id);
            });
        } 
        
        return response.json(status);
    }

    async removeCarpoolOfferVacancy(request: Request, response: Response) {
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolOfferRepository = new CarpoolOfferRepository();

        const status = await carpoolOfferRepository.removeVacancy(parseInt(id));

        return response.json(status);
    }

    async addCarpoolOfferVacancy(request: Request, response: Response) {
        const {id} = request.params;
        
        if(isNaN(parseInt(id)) || !isFinite(parseInt(id))){
            response.status(400);
            return response.json({status:"Bad request"});
        }

        const carpoolOfferRepository = new CarpoolOfferRepository();

        const status = await carpoolOfferRepository.addVacancy(parseInt(id));

        return response.json(status);
    }
}
export default CarpoolOfferController;