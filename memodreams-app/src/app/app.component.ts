import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'; // 👈 esto es clave
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { WorkInProgressComponent } from "./shared/work-in-progress/work-in-progress.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, RouterModule, TopbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MDreams';

  ngOnInit() {
    
  }
}
