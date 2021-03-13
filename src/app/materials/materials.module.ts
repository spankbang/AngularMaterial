import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import  { MatButtonModule } from '@angular/material/button'

const MaterialComponents = [
  MatSidenavModule,
  MatButtonModule
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
