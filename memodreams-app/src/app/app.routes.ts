import { Routes } from '@angular/router';
import { WorkInProgressComponent } from './shared/work-in-progress/work-in-progress.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: WorkInProgressComponent },
  { path: 'servicios', component: WorkInProgressComponent },
  { path: 'galeria', component: WorkInProgressComponent },
  { path: 'eventos', component: WorkInProgressComponent },
  { path: 'contacto', component: WorkInProgressComponent },
  { path: '**', redirectTo: '/inicio' }
];
