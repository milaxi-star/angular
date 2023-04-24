import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';



@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],

})
export class EmailComponent {
    email: string ='';
    password: string ='';
 constructor(private auth:AuthService){}
   login(){
     if(this.email=='')
     {alert('please enter email');
    return ;}
    
    if(this.password==''){
      alert('please enter password');
      return ;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
  }}