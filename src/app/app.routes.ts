import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
	{ path: 'products', loadComponent: () => import('./products/products').then(m => m.Products) },
	{ path: 'shopping-cart', loadComponent: () => import('./shopping-cart/shopping-cart').then(m => m.ShoppingCart) },
	{ path: 'check-out', loadComponent: () => import('./check-out/check-out').then(m => m.CheckOut) },
	{ path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
	{ path: 'my-orders', loadComponent: () => import('./my-order/my-order').then(m => m.MyOrder) },
	{ path: 'admin/products', loadComponent: () => import('./admin/admin-products/admin-products').then(m => m.AdminProducts) },
	{ path: 'admin/orders', loadComponent: () => import('./admin/admin-order/admin-order').then(m => m.AdminOrder) },
	{ path: '**', redirectTo: '' }
];
