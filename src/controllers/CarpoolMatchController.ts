import { Request, Response } from 'express'
import CarpoolMatchRepository from '../repositories/CarpoolMatchRepository'

class CarpoolMatchController {

    createCarpoolMatch(request: Request, response: Response){
        return response.json({
            message: "CarpoolMatchController.createCarpoolMatch"
        });
    }
    getCarpoolMatchsById(request: Request, response: Response){
        const {id} = request.params;

        return response.json({
            message: `CarpoolMatchController.getCarpoolMatchsById(${id})`
        });
    }
    getCarpoolMatchsByCarpoolRequestId(request: Request, response: Response){
        const {id} = request.params;

        return response.json({
            message: `CarpoolMatchController.getCarpoolMatchsByCarpoolRequestId(${id})`
        });
    }
    getCarpoolMatchsByCarpoolOfferId(request: Request, response: Response){
        const {id} = request.params;

        return response.json({
            message: `CarpoolMatchController.getCarpoolMatchsByCarpoolOfferId(${id})`
        });
    }
}
export default CarpoolMatchController;