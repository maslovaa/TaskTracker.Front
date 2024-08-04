import { Component, inject, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { TaskModel } from "../../../../models/task-model";
import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-update-task-body-dialog',
  standalone: true,
  imports: [
    MatIconModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    FormsModule, 
    NgIf
  ],
  templateUrl: './update-task-body-dialog.component.html',
  styleUrl: './update-task-body-dialog.component.css'
})
export class UpdateTaskBodyDialogComponent implements OnInit {
  form: FormGroup;
  readonly dialogRef = inject(MatDialogRef<UpdateTaskBodyDialogComponent>);
  readonly id = inject<string>(MAT_DIALOG_DATA);

  constructor(private fb: FormBuilder, private taskService: TaskService) { 
    this.form = this.fb.group({
      id: [''],
      head: ['', Validators.required],
      body: [''],
      ticket: [null],
      comment: [null],
      statusId: [''],
      deskId: ['']
    });
  }

  ngOnInit() {
    this.taskService.getTasksId(this.id).subscribe((data) => {
      this.form = this.fb.group({
        id: data.id,
        head: [data.head, Validators.required],
        body: [data.body],
        ticket: [data.ticket],
        comment: [data.comment],
        statusId: [data.statusId],
        deskId: [data.deskId]
      });
    });
  }

  onSubmit(form: TaskModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
