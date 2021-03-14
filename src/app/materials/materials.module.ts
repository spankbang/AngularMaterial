import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'




const MaterialComponents = [
  
  MatButtonModule,
  MatDividerModule,
  MatCheckboxModule,
  MatRadioModule
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
