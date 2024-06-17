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

@Component({
    selector: 'app-column-container',
    standalone: true,
    templateUrl: './column-container.component.html',
    styleUrl: './column-container.component.css',
    imports: [CdkDropListGroup, CdkDropList, CdkDrag, MatButtonModule, MatDividerModule, MatIconModule, NgIf, TaskCardComponent]
})
export class ColumnContainerComponent {
  @Input() title!: string;
  @Input() isAddTask: boolean = false;
  tasks: TaskCardModel[] = [];

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
    const task: TaskCardModel = {
      taskName: "Добавить авторизацию",
      taskDescription: "111111111111111111111"
    };

    this.tasks.push(task);
  }
}
