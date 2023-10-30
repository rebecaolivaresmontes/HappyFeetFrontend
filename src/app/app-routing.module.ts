import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PAGINAS_ROUTES } from './Rutas/paginas-layout.routes';
import { SISTEMA_ROUTES } from './Rutas/sistema-layout.routes';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:"",
    children:PAGINAS_ROUTES
  },
  {
    path:"",
    children:SISTEMA_ROUTES
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
