export class User {
    constructor(
        public username: string,
        public firstName: string,
        public lastName: string,
        public phoneNumber: string,
        public email: string,
        private apiKey: string,
    ) {}

    get token(){
        return this.apiKey; 
    }
}