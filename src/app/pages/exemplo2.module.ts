import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { exemplo2 } from './exemplo2.component';

import { Exemplo2RoutingModule } from './exemplo2-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exemplo2RoutingModule
  ],
  declarations: [exemplo2]
})
export class Exemplo2Module {}
