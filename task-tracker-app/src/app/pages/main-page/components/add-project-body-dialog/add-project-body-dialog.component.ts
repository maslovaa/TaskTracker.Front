import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { ProjectModel } from "../../models/project-model";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-add-project-body-dialog',
  standalone: true,
  imports: [
    MatIconModule, 
    MatDialogModule, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    FormsModule, 
    NgIf,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-project-body-dialog.component.html',
  styleUrl: './add-project-body-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectBodyDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<AddProjectBodyDialogComponent>
  ) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      status: ['', Validators.required],
    });
  }

  onSubmit(form: ProjectModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
