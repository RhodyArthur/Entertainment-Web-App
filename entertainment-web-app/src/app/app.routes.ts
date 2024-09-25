import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: 'category',
     loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    {path: 'category/:category',
     loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },

];
