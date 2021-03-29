import { Request, Response } from 'express'

class CarpoolRequestController {

    createCarpoolRequest(request: Request, response: Response){
        return response.json({
            message: "CarpoolRequestController.createCarpoolRequest"
        });
    }
    getCarpoolRequests(request: Request, response: Response){
        return response.json({
            message: "CarpoolRequestController.getCarpoolRequests"
        });
    }
    getCarpoolRequestById(request: Request, response: Response){
        return response.json({
            message: "CarpoolRequestController.getCarpoolRequestById"
        });
    }
    getCarpoolRequestByUserId(request: Request, response: Response){
        return response.json({
            message: "CarpoolRequestController.getCarpoolRequestByUserId"
        });
    }
}

export default CarpoolRequestController;
