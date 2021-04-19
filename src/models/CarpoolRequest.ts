class CarpoolRequest {
    id?: number;
    userId: number;
    phone: string;
    fromCity: string;
    fromNeighborhood: string;
    fromStreet: string;
    toCity: string;
    toNeighborhood: string;
    toStreet: string;
    startDate: Date;
    endDate: Date;
    canceled: boolean = false;

    constructor(userId: number, phone: string, fromCity: string, fromNeighborhood: string, fromStreet: string, toCity: string, toNeighborhood: string, toStreet: string, startDate: Date, endDate: Date) {
        this.userId = userId;
        this.phone = phone;
        this.fromCity = fromCity;
        this.fromNeighborhood = fromNeighborhood;
        this.fromStreet = fromStreet;
        this.toCity = toCity;
        this.toNeighborhood = toNeighborhood;
        this.toStreet = toStreet;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
export default CarpoolRequest;