import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DeskModel } from '../../../../models/desk-model';
import { MatIconModule } from '@angular/material/icon';
import { DeskService } from '../../../../services/desk.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDeskBodyDialogComponent } from '../add-desk-body-dialog/add-desk-body-dialog.component';
import { ProjectService } from '../../../../services/project.service';
import { GetNameProjectPipe } from "../../../../pipes/get-name-project.pipe";
import { UpdateDeskBodyDialogComponent } from '../update-desk-body-dialog/update-desk-body-dialog.component';

@Component({
  selector: 'app-desks-container',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatIconModule, GetNameProjectPipe],
  templateUrl: './desks-container.component.html',
  styleUrl: './desks-container.component.css'
})
export class DesksContainerComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['update', 'delete', 'name', 'project'];
  dataSource = new MatTableDataSource<DeskModel>();
  dataFromDialogDesk!: DeskModel;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog, private deskService: DeskService) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.deskService.getDesks().subscribe((data: DeskModel[]) => {
      this.dataSource.data = data;
    });
  }

  onAddDesk() {
    const dialogRef = this.dialog.open(AddDeskBodyDialogComponent,
      { width: '350px', height: '500px' });

      dialogRef.afterClosed().subscribe((data) => {
        this.dataFromDialogDesk = data?.form;
        if (data?.clicked === 'submit') {
            const desk: DeskModel = {
                name: this.dataFromDialogDesk.name,
                projectId: this.dataFromDialogDesk.projectId
            };
            
            this.deskService.postDesks(desk).subscribe((data: string) => {
              this.deskService.getDesks().subscribe((data: DeskModel[]) => {
                this.dataSource.data = data;
              });
            });
        }
    });
  }

  onUpdateDesk(id?: string) {
    const dialogRef = this.dialog.open(UpdateDeskBodyDialogComponent,
      { width: '350px', height: '500px', data: id });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialogDesk = data?.form;

      if (data?.clicked === 'submit') {
        const desk: DeskModel = {
          id: this.dataFromDialogDesk.id,
          name: this.dataFromDialogDesk.name,
          projectId: this.dataFromDialogDesk.projectId
        };

        this.deskService.putDesks(desk).subscribe((data) => {
          if (data === true) {
            this.deskService.getDesks().subscribe((data: DeskModel[]) => {
              this.dataSource.data = data;
            });
          }
        });

      }
    });
  }

  onDeleteDesk(id: string) {
    this.deskService.deleteDesks(id).subscribe((data) => {
      if (data === true) {
        this.deskService.getDesks().subscribe((data: DeskModel[]) => {
          this.dataSource.data = data;
        });
      }
    });
  }
}