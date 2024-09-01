import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../../../../services/account.service';
import { RegisterModel } from '../../../../models/register-model';
import { NgIf } from "@angular/common";
import { ResponseRegisterModel } from '../../../../models/response-register-model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    NgIf
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService) { 
    this.form = this.fb.group({
      surname: ['', Validators.required],
      name: ['', Validators.required],
      patronymic: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: RegisterModel) {
    this.accountService.register(form).subscribe((data: ResponseRegisterModel) => {
      alert('The user is registered');
    });
  }
}
