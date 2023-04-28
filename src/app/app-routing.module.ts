import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'home',
  loadChildren:() => import('./pages/ home/module').then(=> m.homePagesModule)
}
{
  path:'',
  redirecto: 'home',
  pathMatch:'full'

}
{
  patch: 'pagina',
  loadChidren:()=> import('./pages/exemplo2/ module').then(m. => m.exemplo2module)
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
