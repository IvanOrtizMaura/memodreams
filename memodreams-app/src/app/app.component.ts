import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'; // 👈 esto es clave
import { TopbarComponent } from './shared/topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, TopbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MDreams';

  ngOnInit() {
    
  }
}
