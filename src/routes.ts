import express from 'express'

import UserController from './controllers/UserController'
import CarpoolRequestController from './controllers/CarpoolRequestController'
import CarpoolOfferController from './controllers/CarpoolOfferController'
import CarpoolMatchController from './controllers/CarpoolMatchController'

const routes = express.Router();

const userController = new UserController;
const carpoolRequestController = new CarpoolRequestController;
const carpoolOfferController = new CarpoolOfferController;
const carpoolMatchController = new CarpoolMatchController;

routes.post('/user', userController.createUser);
routes.get('/users', userController.getUsers);
routes.get('/user/:id', userController.getUserById);

routes.post('/carpool/request', carpoolRequestController.createCarpoolRequest);
routes.get('/carpool/requests', carpoolRequestController.getCarpoolRequests);
routes.get('/carpool/request/:id', carpoolRequestController.getCarpoolRequestById);
routes.get('/carpool/request/user/:id', carpoolRequestController.getCarpoolRequestByUserId);

routes.post('/carpool/offer', carpoolOfferController.createCarpoolOffer);
routes.get('/carpool/offers', carpoolOfferController.getCarpoolOffers);
routes.get('/carpool/offer/:id', carpoolOfferController.getCarpoolOfferById);
routes.get('/carpool/offer/user/:id', carpoolOfferController.getCarpoolOfferByUserId);

routes.post('/carpool/match', carpoolMatchController.createCarpoolMatch);
routes.get('/carpool/match/:id', carpoolMatchController.getCarpoolMatchsById);
routes.get('/carpool/match/request/:id', carpoolMatchController.getCarpoolMatchsByCarpoolRequestId);
routes.get('/carpool/match/offer/:id', carpoolMatchController.getCarpoolMatchsByCarpoolOfferId);

export default routes;