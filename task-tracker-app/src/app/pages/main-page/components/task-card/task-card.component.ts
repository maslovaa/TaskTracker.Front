import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TaskModel } from "../../../../models/task-model";
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaskBodyDialogComponent } from '../update-task-body-dialog/update-task-body-dialog.component';
import { TaskService } from '../../../../services/task.service';
import { StatusService } from '../../../../services/status.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task!: TaskModel;

  constructor(private dialog: MatDialog, private taskService: TaskService, private statusService: StatusService) {}
  
  onUpdateTask(id?: string) {
    if (id === undefined)
      return;
    
    const dialogRef = this.dialog.open(UpdateTaskBodyDialogComponent,
      { width: '350px', height: '500px', data: id });
    
      dialogRef.afterClosed().subscribe((data) => {
        const task: TaskModel = data?.form;

        if (data?.clicked === 'submit') {            
            this.taskService.putTasks(task).subscribe((data) => {
              if (task.id === undefined)
                return;

              this.taskService.getTasksId(task.id).subscribe((data) => {
                this.task = data;
              });
            });
        }
    });
  }
}
