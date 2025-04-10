import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // @ts-ignore
    loadComponent: () =>
      import('mfe-ebooks/HomeComponent').then(m => m.HomeComponent),
  },
  {
    path: 'details',
    // @ts-ignore
    loadComponent: () =>
      import('mfe-ebook-details/EbookDetailsComponent').then(m => m.EbookDetailsComponent),
  },
  {
    path: 'users',
    // @ts-ignore
    loadComponent: () =>
      import('mfe-users/UserDashboardComponent').then(m => m.UserDashboardComponent),
  }
];

