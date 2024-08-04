import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { TaskModel } from "../../../../models/task-model";

@Component({
  selector: 'app-add-task-body-dialog',
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
  templateUrl: './add-task-body-dialog.component.html',
  styleUrl: './add-task-body-dialog.component.css'
})
export class AddTaskBodyDialogComponent {
  form: FormGroup;
  readonly dialogRef = inject(MatDialogRef<AddTaskBodyDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      head: ['', Validators.required],
      body: [''],
      ticket: [null],
      comment: [null],
      statusId: this.data.statusId,
      deskId: this.data.deskId
    });
  }

  onSubmit(form: TaskModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
