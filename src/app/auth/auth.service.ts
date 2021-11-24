import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Subject } from "rxjs";
import { tap } from "rxjs/operators";

import { User } from "./user.model";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    user = new Subject<User>();

    login(email: string, password: string) {
        return this.httpClient.post(
            environment.BASE_URL + "/auth/login",
            {
                email: email,
                password: password
            }
        ).pipe(
            tap((userResponse: any) => {
                this.emitLoggedInUser(userResponse);
            })
        )
    }

    signUp(name: string, email: string, password: string) {
        return this.httpClient.post(
            environment.BASE_URL + "/auth/signUp",
            {
                name: name,
                email: email,
                password: password
            }
        ).pipe(
            tap((userResponse: any) => {
                this.emitLoggedInUser(userResponse);
            })
        )
    }

    private emitLoggedInUser(userInfo: any) {
        const user = new User(userInfo.name, userInfo.email, userInfo.apiKey);
        this.user.next(user);
    }
}