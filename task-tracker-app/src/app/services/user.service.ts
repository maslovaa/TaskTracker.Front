import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsersId(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`/api/Users/${id}`);
  }

  public postUsers(project: UserModel): Observable<string> {
    return this.http.post<string>(`/api/Users`, project);
  }

  public putUsers(id: string, project: UserModel): Observable<void> {
    return this.http.put<void>(`/api/Users/${id}`, project);
  }

  public deleteUsers(id: string): Observable<void> {
    return this.http.delete<void>(`/api/Users/${id}`);
  }
}
