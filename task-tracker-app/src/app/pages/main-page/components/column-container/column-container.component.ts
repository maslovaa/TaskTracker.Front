import { Component, Input, OnInit } from '@angular/core';
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
import { TaskModel } from "../../../../models/task-model";
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AddTaskBodyDialogComponent } from "../add-task-body-dialog/add-task-body-dialog.component";
import { TaskService } from '../../../../services/task.service';
import { StatusService } from '../../../../services/status.service';

@Component({
    selector: 'app-column-container',
    standalone: true,
    templateUrl: './column-container.component.html',
    styleUrl: './column-container.component.css',
    imports: [CdkDropListGroup, CdkDropList, CdkDrag, MatButtonModule, MatDividerModule, MatIconModule, NgIf, TaskCardComponent, MatDialogModule, AddTaskBodyDialogComponent]
})
export class ColumnContainerComponent implements OnInit {
  @Input() title!: string;
  @Input() isAddTask: boolean = false;
  @Input() tasks: TaskModel[] = [];
  @Input() deskId!: string;
  @Input() statusId!: string;

  dataFromDialog!: TaskModel;

  constructor(private dialog: MatDialog, private taskService: TaskService, private statusService: StatusService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data.filter(o => o.statusId === this.statusId);
      console.log(this.tasks);
    });
  }

  onDrop(event: CdkDragDrop<TaskModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      let task: TaskModel = event.previousContainer.data[event.previousIndex];
      task.statusId = this.statusId;

      this.taskService.putTasks(task).subscribe(() => {
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      });
    }
  }

  onAddTask() {
    const dialogRef = this.dialog.open(AddTaskBodyDialogComponent,
      { width: '350px', height: '400px', data: { deskId: this.deskId, statusId: this.statusId }});

    dialogRef.afterClosed().subscribe((data) => {
      this.dataFromDialog = data?.form;
      if (data?.clicked === 'submit') {
        const task: TaskModel = {
          head: this.dataFromDialog.head,
          body: this.dataFromDialog.body,
          comment: this.dataFromDialog.comment,
          ticket: this.dataFromDialog.ticket,
          statusId: this.dataFromDialog.statusId,
          deskId: this.dataFromDialog.deskId
        };

        this.taskService.postTasks(task).subscribe((data) => {
          this.taskService.getTasksId(data).subscribe((data) => {
            this.tasks.push(data);
          });
        });
      }
    });
  }
}
