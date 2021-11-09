import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'dados',
    loadChildren: () =>
      import('./dados/dados.module').then((m) => m.DadosModule),
  },
  {
    path: 'selfie',
    loadChildren: () =>
      import('./selfie/selfie.module').then((m) => m.SelfieModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
