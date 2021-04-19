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

    getId = () => this.id;
    getCarpoolRequestId = () => this.carpoolRequestId;
    getCarpoolOfferId = () => this.carpoolOfferId;

    setAccepted = () => this.accepted = true;
    isAccepted = () => this.accepted;

    setCanceled = () => this.canceled = true;
    isCanceled = () => this.canceled;
}
export default CarpoolMatch;