import { Component } from '@angular/core';
import {NgForm}from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  constructor(private router:Router){}
onLogin(loginForm:NgForm){
  console.log(loginForm.value);


}
}
