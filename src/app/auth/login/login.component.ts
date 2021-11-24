import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = { email: "", password: "" };

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
    }

    getLogin() {
        console.log(this.credentials.email);
        console.log("CCC");
        console.log(this.credentials.password);
        this.authService.login(this.credentials.email, this.credentials.password).subscribe(successLogin => {
            this.router.navigateByUrl("/");
            console.log("HERE");
        })
    }

}
