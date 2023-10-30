import { Routes, RouterModule } from '@angular/router';

export const SISTEMA_ROUTES: Routes = [
  { 
    path:"home",
    loadChildren:()=>import("../Componentes/Sistema/principal/principal.module").then(m=>m.PrincipalModule)

   },
];


