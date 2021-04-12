import { Request, Response } from 'express'
import CarpoolOffer from '../models/CarpoolOffer';
import CarpoolOfferRepository from '../repositories/CarpoolOfferRepository'

class CarpoolOfferController {

    createCarpoolOffer(request: Request, response: Response) {
        return response.json({
            message: "CarpoolOfferController.createCarpoolOffer"
        });
    }

    async getCarpoolOffers(request: Request, response: Response) {
        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffers: CarpoolOffer[] = await carpoolOfferRepository.getCarpoolOffers()

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
}
export default CarpoolOfferController;