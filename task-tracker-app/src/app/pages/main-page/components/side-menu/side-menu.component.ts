import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router, RouterModule  } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectModel } from "../../../../models/project-model";
import { DeskModel } from '../../../../models/desk-model';
import { ProjectService } from '../../../../services/project.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgClass } from "@angular/common";
import { DeskService } from '../../../../services/desk.service';

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
        RouterModule,
        MatDialogModule,
        MatCheckboxModule,
        NgClass
    ]
})
export class SideMenuComponent implements OnInit {
    desks: DeskModel[] = [];
    projects: ProjectModel[] = [];
    activeProjectId?: string;
    activeDeskId?: string;
    isSetMain: boolean = true;
    isSetAdmin: boolean = false;

    constructor(private router: Router, private projectService: ProjectService, private deskService: DeskService) {}

    ngOnInit() {
        this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
            this.isSetMain = true;
            this.router.navigate(['/main']);
            this.projects = data;
        });
    }

    onSetProjectActive(id?: string) {
        if (id === undefined)
            return;

        this.activeProjectId = id;
        this.projectService.getProjectsId(id).subscribe((data) => {
            if (data.desks === undefined)
                return;

            this.desks = data.desks;
            this.router.navigate(['/main']);
        });
    }

    onSetDeskActive(id?: string) {
        if (id === undefined)
            return;

        this.activeDeskId = id;

        this.deskService.getDesksId(id).subscribe((data) => {
            this.router.navigate([`/main/${id}`]);
        });
    }

    onSetMain() {
        this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
            this.isSetMain = true;
            this.router.navigate(['/main']);
            this.projects = data;
            this.isSetMain = true;
            this.isSetAdmin = false;
        });
    }
    
    onSetAdmin() {
        this.isSetMain = false;
        this.isSetAdmin = true;
    }
}
