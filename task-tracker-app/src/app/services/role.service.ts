import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getRoles(): Observable<RoleModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<RoleModel[]>(`/api/Roles`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public getRolesId(id: string): Observable<RoleModel> {
    const token = this.cookieService.get('token');
    return this.http.get<RoleModel>(`/api/Roles/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public postRoles(project: RoleModel): Observable<string> {
    const token = this.cookieService.get('token');
    return this.http.post<string>(`/api/Roles`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public putRoles(project: RoleModel): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.put<boolean>(`/api/Roles`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public deleteRoles(id: string): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.delete<boolean>(`/api/Roles/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
