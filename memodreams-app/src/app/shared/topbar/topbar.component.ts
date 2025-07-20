import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-topbar',
  imports: [ RouterModule,
    MenubarModule,
    SidebarModule ,
    ButtonModule,],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
sidebarVisible = false;

  menuItems: MenuItem[] = [
    { label: 'INICIO', routerLink: '/' },
    { label: 'SERVICIOS', routerLink: '/servicios' },
    { label: 'EVENTOS', routerLink: '/eventos' },
    { label: 'GALERÍA', routerLink: '/galeria' },
    { label: 'CONTACTO', routerLink: '/contacto' }
  ];

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  openSocialMedia(socialMedia: string) {
    switch (socialMedia) {
      case 'facebook':
        window.open('https://www.facebook.com/memodreamsevents', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/memodreamsevents', '_blank');
        break;
      case 'tiktok':
        window.open('https://www.tiktok.com/@memodreamsevents', '_blank');
        break;
    }
}
}