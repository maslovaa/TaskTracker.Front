import { Component, Input } from '@angular/core';
import { NgIf } from "@angular/common";
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { TaskCardComponent } from "../task-card/task-card.component";
import { TaskCardModel } from "../../models/task-card-model";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddTaskBodyDialogComponent } from "../add-task-body-dialog/add-task-body-dialog.component";

@Component({
    selector: 'app-column-container',
    standalone: true,
    templateUrl: './column-container.component.html',
    styleUrl: './column-container.component.css',
    imports: [CdkDropListGroup, CdkDropList, CdkDrag, MatButtonModule, MatDividerModule, MatIconModule, NgIf, TaskCardComponent, MatDialogModule, AddTaskBodyDialogComponent]
})
export class ColumnContainerComponent {
  @Input() title!: string;
  @Input() isAddTask: boolean = false;
  tasks: TaskCardModel[] = [];

  dataFromDialog!: TaskCardModel;

  constructor(private dialog: MatDialog) {}

  onDrop(event: CdkDragDrop<TaskCardModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onAddTask() {
    const dialogRef = this.dialog.open(AddTaskBodyDialogComponent,
      { width: '350px', height: '400px' });

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data?.form;
      if (data?.clicked === 'submit') {
        const task: TaskCardModel = {
          taskName: this.dataFromDialog.taskName,
          taskDescription: this.dataFromDialog.taskDescription
        };

        this.tasks.push(task);
      }
    });
  }
}
