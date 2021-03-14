import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatInputModule } from '@angular/material/input'





const MaterialComponents = [
  
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule
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
