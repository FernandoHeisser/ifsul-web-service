import { Request, Response } from 'express'

class CarpoolMatchController {

    createCarpoolMatch(request: Request, response: Response){
        return response.json({
            message: "CarpoolMatchController.createCarpoolMatch"
        });
    }
    getCarpoolMatchsById(request: Request, response: Response){
        return response.json({
            message: "CarpoolMatchController.getCarpoolMatchsById"
        });
    }
    getCarpoolMatchsByCarpoolRequestId(request: Request, response: Response){
        return response.json({
            message: "CarpoolMatchController.getCarpoolMatchsByCarpoolRequestId"
        });
    }
    getCarpoolMatchsByCarpoolOfferId(request: Request, response: Response){
        return response.json({
            message: "CarpoolMatchController.getCarpoolMatchsByCarpoolOfferId"
        });
    }
}

export default CarpoolMatchController;
