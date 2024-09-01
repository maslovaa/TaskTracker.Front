import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from "@angular/common";
import { AccountService } from '../../../../services/account.service';
import { LoginModel } from '../../../../models/login-model';
import { ResponseLoginModel } from '../../../../models/response-login-model';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule,
    NgIf
  ],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css'
})
export class AuthorizationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private cookieService: CookieService, private router: Router) { 
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(form: LoginModel) {
    this.accountService.login(form).subscribe((data: ResponseLoginModel) => {
      this.cookieService.set('token', data.token);
      this.cookieService.set('userName', data.user.userName);
      this.cookieService.set('email', data.user.email);
      this.cookieService.set('surname', data.user.surname);
      this.cookieService.set('name', data.user.name);
      this.cookieService.set('patronymic', data.user.patronymic);
      this.router.navigate(['/main']);
    });
  }
}
