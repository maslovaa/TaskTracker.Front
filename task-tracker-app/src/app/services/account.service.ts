import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../models/register-model';
import { ResponseRegisterModel } from '../models/response-register-model';
import { LoginModel } from '../models/login-model';
import { ResponseLoginModel } from '../models/response-login-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public register(register: RegisterModel): Observable<ResponseRegisterModel> {
    return this.http.post<ResponseRegisterModel>(`/api/Account/register`, register);
  }

  public login(login: LoginModel): Observable<ResponseLoginModel> {
    return this.http.post<ResponseLoginModel>(`/api/Account/login`, login);
  }

  public isUserAuthenticated(): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.get<boolean>(`/api/Account/isAuth`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
