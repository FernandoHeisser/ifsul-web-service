import { Request, Response } from 'express'
import CarpoolRequestRepository from '../repositories/CarpoolRequestRepository'

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
        const {id} = request.params;

        return response.json({
            message: `CarpoolRequestController.getCarpoolRequestById(${id})`
        });
    }
    getCarpoolRequestByUserId(request: Request, response: Response){
        const {id} = request.params;

        return response.json({
            message: `CarpoolRequestController.getCarpoolRequestByUserId(${id})`
        });
    }
}
export default CarpoolRequestController;