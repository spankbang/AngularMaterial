import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'


const materials = [
  MatButtonModule,
  MatDialogModule
]



@NgModule({
  declarations: [],
  imports: [
    materials
  ],
  exports: [
    materials
  ]
})
export class MaterialsModule { }
