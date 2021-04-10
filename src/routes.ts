import express from 'express'

import UserController from './controllers/UserController'
import CarpoolRequestController from './controllers/CarpoolRequestController'
import CarpoolOfferController from './controllers/CarpoolOfferController'
import CarpoolMatchController from './controllers/CarpoolMatchController'

const routes = express.Router();

const userController = new UserController();
const carpoolRequestController = new CarpoolRequestController;
const carpoolOfferController = new CarpoolOfferController;
const carpoolMatchController = new CarpoolMatchController;

routes.post('/api/user', userController.createUser);
routes.get('/api/users', userController.getUsers);
routes.get('/api/user/:id', userController.getUserById);

routes.post('/api/carpool/request', carpoolRequestController.createCarpoolRequest);
routes.get('/api/carpool/requests', carpoolRequestController.getCarpoolRequests);
routes.get('/api/carpool/request/:id', carpoolRequestController.getCarpoolRequestById);
routes.get('/api/carpool/requests/others/:id', carpoolRequestController.getCarpoolRequestsFromOtherUsers);
routes.get('/api/carpool/requests/user/:id', carpoolRequestController.getCarpoolRequestsByUserId);

routes.post('/api/carpool/offer', carpoolOfferController.createCarpoolOffer);
routes.get('/api/carpool/offers', carpoolOfferController.getCarpoolOffers);
routes.get('/api/carpool/offer/:id', carpoolOfferController.getCarpoolOfferById);
routes.get('/api/carpool/offers/others/:id', carpoolOfferController.getCarpoolOffersFromOtherUsers);
routes.get('/api/carpool/offers/user/:id', carpoolOfferController.getCarpoolOffersByUserId);

routes.post('/api/carpool/match', carpoolMatchController.createCarpoolMatch);
routes.get('/api/carpool/match/:id', carpoolMatchController.getCarpoolMatchsById);
routes.get('/api/carpool/match/request/:id', carpoolMatchController.getCarpoolMatchsByCarpoolRequestId);
routes.get('/api/carpool/match/offer/:id', carpoolMatchController.getCarpoolMatchsByCarpoolOfferId);
routes.get('/api/carpool/match/offer/:offer_id/request/:request_id', carpoolMatchController.getCarpoolMatchsByCarpoolOfferIdAndCarpoolRequestId);

export default routes;