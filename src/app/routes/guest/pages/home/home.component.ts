import { Component } from '@angular/core';
import { GuestModel } from '@core/models/guest-model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

  usuario!: GuestModel;

  constructor(){

  }

  ngOnInit(): void {


  }

}
