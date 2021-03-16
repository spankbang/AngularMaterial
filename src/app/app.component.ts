import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  constructor(
  ) {
    for (let i = 1; i < 1000; i++){
      this.number.push(i)
    }
  }


  number = []


 

}
