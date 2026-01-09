import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'products',
    loadComponent: () =>
      import('./admin-products/admin-products').then(m => m.AdminProducts),
  },
  {
    path: 'products/new',
    loadComponent: () =>
      import('./product-form/product-form').then(m => m.ProductForm),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./product-form/product-form').then(m => m.ProductForm),
  },
];
