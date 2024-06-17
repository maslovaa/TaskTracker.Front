import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TaskCardModel } from "../../models/task-card-model";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input() task!: TaskCardModel;
}
