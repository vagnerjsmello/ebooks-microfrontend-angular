import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/ebook/ebook.component').then(m => m.EbookComponent),
  }
];
