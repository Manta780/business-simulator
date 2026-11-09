import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard.component')
        .then(m => m.DashboardComponent)
  },
  {
    path: 'simulation',
    loadComponent: () =>
      import('./features/simulation/simulation.component')
        .then(m => m.SimulationComponent)
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./features/results/results.component')
        .then(m => m.ResultsComponent)
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
    },

//MOVER CUALQUIER RUTA POR ENCIMA DE **
  {
    path: '**',
    redirectTo: 'login'
  },

];