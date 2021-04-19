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

    constructor(email: string, name: string, cpf: string, password: string, phone: string) {
        this.email = email;
        this.name = name;
        this.cpf = cpf;
        this.password = password;
        this.phone = phone;
    }
}
export default User;
