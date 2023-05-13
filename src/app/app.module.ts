import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {AngularFireModule} from'@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/Register.component';
import { CommonModule } from '@angular/common';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FirestoreModule } from '@angular/fire/firestore';


import { NavbarComponent } from './navbar/navbar.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { Home2Component } from './home2/home2.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { Navbar2Component } from './navbar2/navbar2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EmailComponent,
    HomeComponent,
    FooterComponent,

    NavbarComponent,
     AddrestaurantComponent,
     Home2Component,
     RestaurantDetailsComponent,
     Navbar2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
