import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { DeskModel } from "../../../../models/desk-model";
import { MatSelectModule } from '@angular/material/select'
import { ProjectModel } from '../../../../models/project-model';
import { ProjectService } from '../../../../services/project.service';

@Component({
  selector: 'app-add-desk-body-dialog',
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
    MatSelectModule
  ],
  templateUrl: './add-desk-body-dialog.component.html',
  styleUrl: './add-desk-body-dialog.component.css'
})
export class AddDeskBodyDialogComponent {
  form: FormGroup;
  projects!: ProjectModel[];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddDeskBodyDialogComponent>, private projectService: ProjectService) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      projectId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
      this.projects = data;
    });
  }

  onSubmit(form: DeskModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}