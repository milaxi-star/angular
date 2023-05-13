import { AuthService } from '../auth.service';
import { Firestore , collection , addDoc} from '@angular/fire/firestore';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent {
  title='ang-fire'

  constructor(private firestore: Firestore){

  }

  addRestaurant(f:any){
   console.log(f.value)
  }
}
