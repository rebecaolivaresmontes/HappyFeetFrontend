import { Routes, RouterModule } from '@angular/router';

export const PAGINAS_ROUTES: Routes = [
  { 
    path:"login",
    loadChildren:()=>import("../Componentes/Paginas/login/login.module").then(m=>m.LoginModule)
   },
];


