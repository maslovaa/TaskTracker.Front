import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { ProjectModel } from "../../../../models/project-model";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-update-project-body-dialog',
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
  templateUrl: './update-project-body-dialog.component.html',
  styleUrl: './update-project-body-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateProjectBodyDialogComponent implements OnInit {
  form!: FormGroup;
  readonly dialogRef = inject(MatDialogRef<UpdateProjectBodyDialogComponent>);
  readonly id = inject<string>(MAT_DIALOG_DATA);

  constructor (private fb: FormBuilder, private projectService: ProjectService) { 
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: [''],
      startDate: ['', Validators.required],
      endDate: [null],
      status: ['', Validators.required],
      ownerId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.projectService.getProjectsId(this.id).subscribe((data) => {
      this.form = this.fb.group({
        id: data.id,
        name: [data.name, Validators.required],
        description: [data.description],
        startDate: [data.startDate, Validators.required],
        endDate: [data.endDate],
        status: [data.status, Validators.required],
        ownerId: [data.ownerId, Validators.required]
      });
    });
  }

  onSubmit(form: ProjectModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
