import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './Register/Register.component';
import { registerVersion } from 'firebase/app';

const routes: Routes = [ 
  { path : '',redirectTo:'home',pathMatch:'full'},
  {path:"home" , component :HomeComponent},
  {path:"login" , component : LoginComponent},
  {path:"phone" , component : PhoneComponent},
  {path:"email" , component : EmailComponent},
  {path:"Register", component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
