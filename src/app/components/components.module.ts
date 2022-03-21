import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { MaterialModule } from '../material/material.module';
import { HeroeComponent } from './heroe/heroe.component';



@NgModule({
  declarations: [
    ContadorComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ContadorComponent,
    HeroeComponent
  ]
})
export class ComponentsModule { }
