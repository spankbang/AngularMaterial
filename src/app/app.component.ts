import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  showSpiinning = false

  loadData() {
    this.showSpiinning = true
    
    setTimeout(() => {
      this.showSpiinning= false
    },5000)
  }

}
