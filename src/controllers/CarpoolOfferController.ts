import { Request, Response } from 'express'

class CarpoolOfferController {

    createCarpoolOffer(request: Request, response: Response){
        return response.json({
            message: "CarpoolOfferController.createCarpoolOffer"
        });
    }
    getCarpoolOffers(request: Request, response: Response){
        return response.json({
            message: "CarpoolOfferController.getCarpoolOffers"
        });
    }
    getCarpoolOfferById(request: Request, response: Response){
        const {id} = request.params;

        return response.json({
            message: `CarpoolOfferController.getCarpoolOfferById(${id})`
        });
    }
    getCarpoolOfferByUserId(request: Request, response: Response){
        const {id} = request.params;
        
        return response.json({
            message: `CarpoolOfferController.getCarpoolOfferByUserId(${id})`
        });
    }
}

export default CarpoolOfferController;
