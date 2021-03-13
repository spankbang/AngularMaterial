import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  is_ = false

  buttonClicked() {
    this.is_ = !this.is_
  }


}
