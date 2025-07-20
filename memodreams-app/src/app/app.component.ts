import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar'; // 👈 esto es clave
import { TopbarComponent } from './shared/topbar/topbar.component';
import { WorkInProgressComponent } from "./shared/work-in-progress/work-in-progress.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenubarModule, TopbarComponent, WorkInProgressComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'MDreams';

  ngOnInit() {
    
  }
}
