import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { ScrollingModule } from '@angular/cdk/scrolling'


const materials = [
  MatButtonModule,
  ScrollingModule
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
