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
    done: boolean = false;
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

    getId = () => this.id;
    getUserId = () => this.userId;
    getPhone = () => this.phone;
    getFromCity = () => this.fromCity;
    getFromNeighborhood = () => this.fromNeighborhood;
    getFromStreet = () => this.fromStreet;
    getToCity = () => this.toCity;
    getToNeighborhood = () => this.toNeighborhood;
    getToStreet = () => this.toStreet;
    getStartDate = () => this.startDate;
    getEndDate = () => this.endDate;
    isDone = () => this.done;
    isCanceled = () => this.canceled;

    setDone = () => this.done = true;
    setCanceled = () => this.canceled = true;
}
export default CarpoolRequest;