import { Injectable } from '@angular/core';
import { AngularFireAuth} from'@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth :AngularFireAuth,private router :Router)
  {}
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () =>{
      localStorage.setItem('token','true');
      this.router.navigate(['home2']);}
      ,err=> {
      alert('something is wrong');
      this.router.navigate(['email']);
    })
    }
    register(email:string,password:string){
      this.fireauth.createUserWithEmailAndPassword(email,password).then( ()=>{
        alert('resgistration successfull');
        this.router.navigate(['email'])},
        err => {alert(err.message);
          this.router.navigate(['register']);

      })
    }
    logout(){
      this.fireauth.signOut().then( ()=>
      {localStorage.removeItem('token');
      this.router.navigate(['email']);},err=>{alert(err.message)}
      )
    }
  }
