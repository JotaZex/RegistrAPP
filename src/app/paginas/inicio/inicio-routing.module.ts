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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
