import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./ebook-details/ebook-details.component').then(m => m.EbookDetailsComponent),
  }
];
