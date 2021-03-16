import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatTableModule } from '@angular/material/table'

const materials = [
  MatButtonModule,
  MatTableModule
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
