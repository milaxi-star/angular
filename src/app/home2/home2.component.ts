import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  constructor(private router:Router ){}
  gotorestodetails(){
    this.router.navigate(["/resto"]);
  }

}

