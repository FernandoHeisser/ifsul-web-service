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
    done:boolean = false;
    canceled: boolean = false;
    availableVacancies: number;

    constructor(userId: number, phone: string, fromCity: string, fromNeighborhood: string, fromStreet: string, toCity: string, toNeighborhood: string, toStreet: string, availableVacancies: number) {
        this.userId = userId;
        this.phone = phone;
        this.fromCity = fromCity;
        this.fromNeighborhood = fromNeighborhood;
        this.fromStreet = fromStreet;
        this.toCity = toCity;
        this.toNeighborhood = toNeighborhood;
        this.toStreet = toStreet;
        this.availableVacancies = availableVacancies;
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
    getDone = () => this.done;
    getCanceled = () => this.canceled;
    getAvailableVacancies = () => this.availableVacancies;

    setDone = () => this.done = true;
    setCanceled = () => this.canceled = true;

    addAvailableVacancies = () => this.availableVacancies++;
    removeAvailableVacancies = () => this.availableVacancies--;
}