import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component {
  constructor(private router:Router ){}
  gotoaddrestaurant(){
  this.router.navigate(["/addrestaurant"]);
}
gotohome(){
  this.router.navigate(["/home"]);
}
onlogout(){
  localStorage.removeItem('token');
}
}
