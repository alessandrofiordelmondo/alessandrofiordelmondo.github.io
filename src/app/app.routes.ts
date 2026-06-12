import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'works',
    loadComponent: () => import('./pages/works/works.page').then( m => m.WorksPage)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.page').then( m => m.ContactsPage)
  },
];
