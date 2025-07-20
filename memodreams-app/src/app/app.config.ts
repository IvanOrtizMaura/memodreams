import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// 👇 Importaciones necesarias para PrimeNG 19
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura'; // O cualquier otro tema, como saga, lara, etc.

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(), // Necesario para que PrimeNG funcione correctamente
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
