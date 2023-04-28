import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { exemplo2 } from './exemplo2.component';

const routes: Routes = [
  {
    path: '',
    component: exemplo2,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Exemplo2RoutingModule {}
