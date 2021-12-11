import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

import { User } from "./user.model";
import { environment } from "src/environments/environment";


@Injectable()
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    user = new BehaviorSubject<User | null>(null);

    login(email: string, password: string) {
        return this.httpClient.post(
            environment.BASE_URL + "/auth/login",
            {
                email: email,
                password: password
            }
        ).pipe(
            tap((response: any) => {
                this.emitLoggedInUser(response.userInfo);
            })
        )
    }

    register(firstName: string, lastName: string, username: string, email: string, password: string, phoneNumber: string) {
        return this.httpClient.post(
            environment.BASE_URL + "/auth/register",
            {
                first_name: firstName,
                last_name: lastName,
                username: username,
                phone_number: phoneNumber,
                email: email,
                password: password
            }
        ).pipe(
            tap((response: any) => {
                this.emitLoggedInUser(response.userInfo);
            })
        )
    }

    private emitLoggedInUser(userInfo: any) {
        //TODO save into local db
        const userResponse = new User(
            userInfo.username, userInfo.first_name,
            userInfo.last_name, userInfo.phone_number,
            userInfo.email, userInfo.authToken
        );

        this.user.next(userResponse);
    }
}