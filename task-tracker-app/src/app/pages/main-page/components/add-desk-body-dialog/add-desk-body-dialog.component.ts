import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIf } from "@angular/common";
import { DeskModel } from "../../models/desk-model";

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
    NgIf
  ],
  templateUrl: './add-desk-body-dialog.component.html',
  styleUrl: './add-desk-body-dialog.component.css'
})
export class AddDeskBodyDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<AddDeskBodyDialogComponent>
  ) { 
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit(form: DeskModel) {
    this.dialogRef.close({
      clicked: 'submit',
      form: form
    });
  }
}
