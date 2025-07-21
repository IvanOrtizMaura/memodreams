import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

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

  menuItems = [
  { label: 'INICIO', routerLink: ['/inicio'] },
  { 
    label: 'SERVICIOS', 
    items: [
      { label: 'TOTEM', routerLink: ['/servicios/totem'] },
      { label: 'MAGAZINEBOX', routerLink: ['/servicios/magazinebox'] },
      { label: 'MAGIC MIRROR', routerLink: ['/servicios/magic-mirror'] },
      { label: 'AI', routerLink: ['/servicios/ai'] },
      { label: 'VINTAGE', routerLink: ['/servicios/vintage'] },
      { label: '360', routerLink: ['/servicios/360'] },
      { label: 'VOGUE', routerLink: ['/servicios/vogue'] },
      { label: 'MATRIX', routerLink: ['/servicios/matrix'] },
      { label: 'MPHONE', routerLink: ['/servicios/mphone'] },
      { label: 'MTRUCK', routerLink: ['/servicios/mtruck'] },
    ]
  },
  { label: 'ROBOTS', routerLink: ['/robots'] },
  { label: 'CONTACTO', routerLink: ['/contacto'] }
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