import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
import { DeskService } from '../../../../services/desk.service';

@Component({
  selector: 'app-update-desk-body-dialog',
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
  templateUrl: './update-desk-body-dialog.component.html',
  styleUrl: './update-desk-body-dialog.component.css'
})
export class UpdateDeskBodyDialogComponent {
  form: FormGroup;
  projects!: ProjectModel[];
  readonly dialogRef = inject(MatDialogRef<UpdateDeskBodyDialogComponent>);
  readonly id = inject<string>(MAT_DIALOG_DATA);

  constructor(private fb: FormBuilder, private projectService: ProjectService, private deskService: DeskService) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      projectId: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((data: ProjectModel[]) => {
      this.projects = data;
      
      this.deskService.getDesksId(this.id).subscribe((data) => {
        this.form = this.fb.group({
          id: this.id,
          name: [data.name, Validators.required],
          projectId: [data.projectId, Validators.required]
        });
      })
    });
  }

  onSubmit(form: DeskModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
