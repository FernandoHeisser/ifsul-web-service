class User {
    id?: number;
    email: string;
    name: string;
    password: string;

    constructor(email: string, name: string, password: string) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
}
export default User;
