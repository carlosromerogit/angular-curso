import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";



@NgModule({
  exports:[
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
