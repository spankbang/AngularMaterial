import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    public dialog : MatDialog
  ) {}


  openDialog() {
    let dialogref = this.dialog.open(DialogExampleComponent)
    dialogref.afterClosed().subscribe((res) => {
      console.log(res)
    })
  }

}
