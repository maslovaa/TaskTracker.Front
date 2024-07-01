import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { TaskCardModel } from "../../models/task-card-model";

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

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<AddTaskBodyDialogComponent>
  ) { 
    this.form = this.fb.group({
      taskName: ['', Validators.required],
      taskDescription: ['']
    });
  }

  onSubmit(form: TaskCardModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
