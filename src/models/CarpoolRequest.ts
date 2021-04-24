class CarpoolRequest {
    id?: number;
    user_id: number;
    phone: string;
    from_city: string;
    from_neighborhood: string;
    from_street: string;
    to_city: string;
    to_neighborhood: string;
    to_street: string;
    start_date: Date;
    end_date: Date;
    canceled: boolean = false;

    constructor(userId: number, phone: string, fromCity: string, fromNeighborhood: string, fromStreet: string, toCity: string, toNeighborhood: string, toStreet: string, startDate: Date, endDate: Date) {
        this.user_id = userId;
        this.phone = phone;
        this.from_city = fromCity;
        this.from_neighborhood = fromNeighborhood;
        this.from_street = fromStreet;
        this.to_city = toCity;
        this.to_neighborhood = toNeighborhood;
        this.to_street = toStreet;
        this.start_date = startDate;
        this.end_date = endDate;
    }
}
export default CarpoolRequest;