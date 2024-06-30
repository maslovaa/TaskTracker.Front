import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeskContainerComponent } from "../desk-container/desk-container.component";
import { RouterModule, Routes  }   from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddDeskBodyDialogComponent } from "../add-desk-body-dialog/add-desk-body-dialog.component";
import { AddProjectBodyDialogComponent } from "../add-project-body-dialog/add-project-body-dialog.component";
import { DeskModel } from "../../models/desk-model";
import { ProjectModel } from "../../models/project-model";

@Component({
    selector: 'app-side-menu',
    standalone: true,
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.css',
    imports: [
        MatToolbarModule, 
        MatIconModule, 
        MatMenuModule, 
        MatDividerModule, 
        MatSidenavModule, 
        MatListModule, 
        MatExpansionModule, 
        DeskContainerComponent, 
        RouterModule,
        MatDialogModule
    ]
})
export class SideMenuComponent {
    desks: DeskModel[] = [];
    projects: ProjectModel[] = [];
    dataFromDialogDesk!: DeskModel;
    dataFromDialogProject!: ProjectModel;

    constructor(private dialog: MatDialog) {}

    onAddDesk() {
        const dialogRef = this.dialog.open(AddDeskBodyDialogComponent,
            { width: '350px', height: '400px' });
            
        dialogRef.afterClosed().subscribe((data) => {
            this.dataFromDialogDesk = data?.form;
            if (data?.clicked === 'submit') {
              const desk: DeskModel = {
                name: this.dataFromDialogDesk.name
              };
      
              this.desks.push(desk);
            }
        });
    }

    onAddProject() {
        const dialogRef = this.dialog.open(AddProjectBodyDialogComponent,
            { width: '350px', height: '500px' });
        
        dialogRef.afterClosed().subscribe((data) => {
            this.dataFromDialogProject = data?.form;
            if (data?.clicked === 'submit') {
                const project: ProjectModel = {
                    name: this.dataFromDialogProject.name,
                    startDate: this.dataFromDialogProject.startDate,
                    endDate: this.dataFromDialogProject.endDate,
                    status: this.dataFromDialogProject.status
                };
          
                this.projects.push(project);
            }
        });
    }
}
