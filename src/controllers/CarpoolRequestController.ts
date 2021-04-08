import { Request, Response } from 'express'
import CarpoolRequestRepository from '../repositories/CarpoolRequestRepository'

class CarpoolRequestController {

    createCarpoolRequest(request: Request, response: Response){
        return response.json({message: "CarpoolRequestController.createCarpoolRequest"});
    }
    async getCarpoolRequests(request: Request, response: Response){
        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequests = await carpoolRequestRepository.getCarpoolRequests()

        return response.json(carpoolRequests);
    }
    async getCarpoolRequestsFromOtherUsers(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;
        
        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequests = await carpoolRequestRepository.getCarpoolRequestsFromOtherUsers(numberId)

        return response.json(carpoolRequests);
    }
    async getCarpoolRequestById(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequest = await carpoolRequestRepository.getCarpoolRequestById(numberId);

        return response.json(carpoolRequest);
    }
    async getCarpoolRequestsByUserId(request: Request, response: Response){
        const {id} = request.params;
        const numberId: number = +id;

        const carpoolRequestRepository = new CarpoolRequestRepository();
        
        const carpoolRequests = await carpoolRequestRepository.getCarpoolRequestsByUserId(numberId);

        return response.json(carpoolRequests);
    }
}
export default CarpoolRequestController;