class CarpoolMatch {
    id?: number;
    carpool_request_id: number;
    carpool_offer_id: number;
    accepted?: boolean;
    canceled?: boolean;

    constructor(carpoolRequestId: number, carpoolOfferId: number) {
        this.carpool_request_id = carpoolRequestId;
        this.carpool_offer_id = carpoolOfferId;
    }
}
export default CarpoolMatch;