import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProjectModel } from '../../../../models/project-model';
import { ProjectService } from '../../../../services/project.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectBodyDialogComponent } from '../add-project-body-dialog/add-project-body-dialog.component';
import { UpdateProjectBodyDialogComponent } from '../update-project-body-dialog/update-project-body-dialog.component';

@Component({
  selector: 'app-projects-container',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatIconModule],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.css'
})
export class ProjectsContainerComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['update', 'delete', 'name', 'description', 'startDate', 'endDate', 'status'];
  dataSource = new MatTableDataSource<ProjectModel>();
  dataFromDialogProject!: ProjectModel;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private projectService: ProjectService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
      this.dataSource.data = data;
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
                description: this.dataFromDialogProject.description,
                startDate: this.dataFromDialogProject.startDate,
                endDate: this.dataFromDialogProject.endDate,
                status: this.dataFromDialogProject.status
            };
            
            this.projectService.postProjects(project).subscribe((data: string) => {
              this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
                this.dataSource.data = data;
              });
            })
        }
    });
  }

  onUpdateProject(id?: string) {
    const dialogRef = this.dialog.open(UpdateProjectBodyDialogComponent,
      { width: '350px', height: '500px', data: id });
  
    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialogProject = data?.form;
      if (data?.clicked === 'submit') {
          const project: ProjectModel = {
              id: this.dataFromDialogProject.id,
              name: this.dataFromDialogProject.name,
              description: this.dataFromDialogProject.description,
              startDate: this.dataFromDialogProject.startDate,
              endDate: this.dataFromDialogProject.endDate,
              status: this.dataFromDialogProject.status
          };
          
          this.projectService.putProjects(project).subscribe((data) => {
            if (data === true) {
                this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
                this.dataSource.data = data;
              });
            }
          })
      }
    });
  }

  onDeleteProject(id: string) {
    this.projectService.deleteProjects(id).subscribe((data) => {
      if (data === true) {
        this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
          this.dataSource.data = data;
        });
      }
    });
  }
}