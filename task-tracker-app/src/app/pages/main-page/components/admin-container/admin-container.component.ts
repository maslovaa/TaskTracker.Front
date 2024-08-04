import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsContainerComponent } from "../projects-container/projects-container.component";
import { DesksContainerComponent } from "../desks-container/desks-container.component";

@Component({
  selector: 'app-admin-container',
  standalone: true,
  imports: [MatTabsModule, ProjectsContainerComponent, DesksContainerComponent],
  templateUrl: './admin-container.component.html',
  styleUrl: './admin-container.component.css'
})
export class AdminContainerComponent {
  
}