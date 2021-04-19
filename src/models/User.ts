class User {
    id?: number;
    email: string;
    name: string;
    cpf: string;
    password: string;

    constructor(email: string, name: string, cpf: string, password: string) {
        this.email = email;
        this.name = name;
        this.cpf = cpf;
        this.password = password;
    }
}
export default User;
