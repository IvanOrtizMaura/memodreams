import { Routes } from '@angular/router';
import { WorkInProgressComponent } from './shared/work-in-progress/work-in-progress.component';
import { StartPageComponent } from './start-page/start-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: StartPageComponent },
  { path: 'servicios', component: WorkInProgressComponent },
  { path: 'servicios/totem', component: WorkInProgressComponent },
  { path: 'servicios/magazinebox', component: WorkInProgressComponent },
  { path: 'servicios/magic-mirror', component: WorkInProgressComponent },
  { path: 'servicios/ai', component: WorkInProgressComponent },
  { path: 'servicios/vintage', component: WorkInProgressComponent },
  { path: 'servicios/360', component: WorkInProgressComponent },
  { path: 'servicios/vogue', component: WorkInProgressComponent },
  { path: 'servicios/matrix', component: WorkInProgressComponent },
  { path: 'servicios/mphone', component: WorkInProgressComponent },
  { path: 'servicios/mtruck', component: WorkInProgressComponent },
  { path: 'robots', component: WorkInProgressComponent },
  { path: 'contacto', component: WorkInProgressComponent },
  { path: '**', redirectTo: '/inicio' },
];
