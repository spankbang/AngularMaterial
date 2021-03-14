import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker'





const MaterialComponents = [
  
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule
  
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
