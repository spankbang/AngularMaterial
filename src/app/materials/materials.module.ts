import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'



const MaterialComponents = [
  
  MatButtonModule,
  MatSelectModule
  
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialsModule { }
