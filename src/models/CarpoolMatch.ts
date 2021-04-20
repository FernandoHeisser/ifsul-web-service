class CarpoolMatch {
    id?: number;
    carpoolRequestId: number;
    carpoolOfferId: number;
    accepted?: boolean;
    canceled?: boolean;

    constructor(carpoolRequestId: number, carpoolOfferId: number) {
        this.carpoolRequestId = carpoolRequestId;
        this.carpoolOfferId = carpoolOfferId;
    }
}
export default CarpoolMatch;