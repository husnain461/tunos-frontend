import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ProfolioComponent } from './portfolio/profolio.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BtntopComponent } from './btntop/btntop.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './auth/register/register.component';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        ServicesComponent,
        ProfolioComponent,
        AboutComponent,
        TestimonialComponent,
        ContactComponent,
        LoginComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        BtntopComponent,
        RegisterComponent,
        LandingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
