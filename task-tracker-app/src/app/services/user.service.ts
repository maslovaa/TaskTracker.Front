import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getUsersId(id: string): Observable<UserModel> {
    const token = this.cookieService.get('token');
    return this.http.get<UserModel>(`/api/Users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public postUsers(project: UserModel): Observable<string> {
    const token = this.cookieService.get('token');
    return this.http.post<string>(`/api/Users`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public putUsers(id: string, project: UserModel): Observable<void> {
    const token = this.cookieService.get('token');
    return this.http.put<void>(`/api/Users/${id}`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public deleteUsers(id: string): Observable<void> {
    const token = this.cookieService.get('token');
    return this.http.delete<void>(`/api/Users/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
