import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'asistencia',
        loadChildren: () => import('./../../paginas/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
      },
      {
        path: 'qr',
        loadChildren: () =>
          import('./../../paginas/qr/qr.module').then((m) => m.QrPageModule),
      },
      {
        path: 'configuracion',
        loadChildren: () => import('./../../paginas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
