import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role-model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  public getRoles(): Observable<RoleModel[]> {
    return this.http.get<RoleModel[]>(`/api/Roles`);
  }

  public getRolesId(id: string): Observable<RoleModel> {
    return this.http.get<RoleModel>(`/api/Roles/${id}`);
  }

  public postRoles(project: RoleModel): Observable<string> {
    return this.http.post<string>(`/api/Roles`, project);
  }

  public putRoles(project: RoleModel): Observable<boolean> {
    return this.http.put<boolean>(`/api/Roles`, project);
  }

  public deleteRoles(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`/api/Roles/${id}`);
  }
}
