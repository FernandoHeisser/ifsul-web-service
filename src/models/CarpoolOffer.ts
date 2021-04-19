class CarpoolOffer {
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
    availableVacancies: number;

    constructor(userId: number, phone: string, fromCity: string, fromNeighborhood: string, fromStreet: string, toCity: string, toNeighborhood: string, toStreet: string, startDate: Date, endDate: Date, availableVacancies: number) {
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
        this.availableVacancies = availableVacancies;
    }
}
export default CarpoolOffer;