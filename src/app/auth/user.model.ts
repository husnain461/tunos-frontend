export class User {
    constructor(
        public name: string,
        public email: string,
        private apiKey: string,
    ) {}

    get token(){
        return this.apiKey; 
    }
}