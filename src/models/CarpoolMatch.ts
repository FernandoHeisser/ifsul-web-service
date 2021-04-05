class CarpoolMatch {
    id?: number;
    carpoolRequestId: number;
    carpoolOfferId: number;
    accepted?: boolean;

    constructor(carpoolRequestId: number, carpoolOfferId: number) {
        this.carpoolRequestId = carpoolRequestId;
        this.carpoolOfferId = carpoolOfferId;
    }

    getId = () => this.id;
    getCarpoolRequest = () => this.carpoolRequestId;
    getCarpoolOfferId = () => this.carpoolOfferId;

    setAccepted = () => this.accepted = true;
    getAccepted = () => this.accepted;
}
export default CarpoolMatch;