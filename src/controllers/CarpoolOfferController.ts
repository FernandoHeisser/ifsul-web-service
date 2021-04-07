import { Request, Response } from 'express'
import CarpoolOfferRepository from '../repositories/CarpoolOfferRepository'

class CarpoolOfferController {

    createCarpoolOffer(request: Request, response: Response){
        return response.json({
            message: "CarpoolOfferController.createCarpoolOffer"
        });
    }
    async getCarpoolOffers(request: Request, response: Response){
        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffers = await carpoolOfferRepository.getCarpoolOffers()

        return response.json(carpoolOffers);
    }
    async getCarpoolOfferById(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffer = await carpoolOfferRepository.getCarpoolOfferById(numberId);

        return response.json(carpoolOffer);
    }
    async getCarpoolOfferByUserId(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolOfferRepository = new CarpoolOfferRepository();
        
        const carpoolOffer = await carpoolOfferRepository.getCarpoolOfferByUserId(numberId);

        return response.json(carpoolOffer);
    }
}
export default CarpoolOfferController;