import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AddPersonPage } from './pages/add-person-page/add-person-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
    title: 'Home page',
  },
  {
    path: 'addPersonPage',
    component: AddPersonPage,
    title: 'Add person page',
  },
];
