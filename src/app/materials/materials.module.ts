import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = [
  MatButtonModule,

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


/*
  Typography basically deals with the styles and apperance of the 
  Text on your website !
  Angular provides the levels where each level will have particular fontsize,
  font-weight, etc.
*/