import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-task-body-dialog',
  standalone: true,
  imports: [MatIconModule, MatDialogModule, MatButtonModule],
  templateUrl: './add-task-body-dialog.component.html',
  styleUrl: './add-task-body-dialog.component.css'
})
export class AddTaskBodyDialogComponent {

}
