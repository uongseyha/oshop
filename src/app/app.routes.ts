import { Routes } from '@angular/router';
import { authGuard } from './services/auth-guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then((m) => m.Home) },
  { path: 'products', loadComponent: () => import('./products/products').then((m) => m.Products) },
  {
    path: 'product-detail/:id',
    loadComponent: () =>
      import('./product-detail/product-detail').then((m) => m.ProductDetailComponent),
    data: { renderMode: 'server' },
  },
  { path: 'shopping-cart', loadComponent: () => import('./cart/cart').then(m => m.CartComponent) },
  { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
//   { path: 'my-orders', loadComponent: () => import('./my-order/my-order').then((m) => m.MyOrder) },
  {
    path: 'check-out',
    canActivate: [authGuard],
    loadComponent: () => import('./check-out/check-out').then((m) => m.CheckOut),
  },
  {
    path: 'admin/products/new',
    canActivate: [authGuard],
    loadComponent: () => import('./admin/product-form/product-form').then((m) => m.ProductForm),
  },
  {
    path: 'admin/products/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./admin/product-form/product-form').then((m) => m.ProductForm),
  },
  {
    path: 'admin/products',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./admin/admin-products/admin-products').then((m) => m.AdminProducts),
  },
  // { path: 'admin/orders', canActivate: [authGuard], loadComponent: () => import('./admin/admin-order/admin-order').then(m => m.AdminOrder) },
  { path: '**', redirectTo: '' },
];
