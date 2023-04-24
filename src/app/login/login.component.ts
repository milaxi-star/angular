import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  

constructor(private router:Router ){}
gotoemail()
{this.router.navigate(["/email"])}
gotophone()
{this.router.navigate(["/phone"])}

gotoRegister(){
  this.router.navigate(["/Register"])}
}