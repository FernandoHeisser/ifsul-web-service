class User {
    id?: number;
    email: string;
    name: string;
    cpf: string;
    password: string;
    phone: string;
    city?: string;
    neighborhood?: string;
    street?: string;
    facebook?: string;
    instagram?: string;
    twitter?: string;
    photo?: string;
    carpoolDone: number = 0;
    carpoolCanceled: number = 0;
    carpoolOffered: number = 0;
    carpoolRequested: number = 0;

    constructor(email: string, name: string, cpf: string, password: string, phone: string) {
        this.email = email;
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.phone = phone;
    }

    getId = () => this.id;
    getEmail = () => this.email;
    getName = () => this.name;
    getCpf = () => this.cpf;
    getPassword = () => this.password;
    getPhone = () => this.phone;

    setCity = (city: string) => this.city = city;
    setNeighborhood = (neighborhood: string) => this.neighborhood = neighborhood;
    setStreet = (street: string) => this.street = street;
    setFacebook = (facebook: string) => this.facebook = facebook;
    setInstagram = (instagram: string) => this.instagram = instagram;
    setTwitter = (twitter: string) => this.twitter = twitter;
    setPhoto = (photo: string) => this.photo = photo;

    getCity = () => this.city;
    getNeighborhood = () => this.neighborhood;
    getStreet = () => this.street;
    getFacebook = () => this.facebook;
    getInstagram = () => this.instagram;
    getTwitter = () => this.twitter;
    getPhoto = () => this.photo;

    addCarpoolDone = () => this.carpoolDone++;
    addCarpoolCanceled = () => this.carpoolCanceled++;
    addCarpoolOffered = () => this.carpoolOffered++;
    addCarpoolRequested = () => this.carpoolRequested++;

    getCarpoolDone = () => this.carpoolDone;
    getCarpoolCanceled = () => this.carpoolCanceled;
    getCarpoolOffered = () => this.carpoolOffered;
    getCarpoolRequested = () => this.carpoolRequested;
}
