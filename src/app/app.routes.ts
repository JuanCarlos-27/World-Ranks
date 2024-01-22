import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home-page/home-page.component'),
      },
      {
        path: 'country/:country',
        loadComponent: () =>
          import('./pages/country-page/country-page.component'),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
