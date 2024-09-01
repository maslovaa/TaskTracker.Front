import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getTasks(): Observable<TaskModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<TaskModel[]>(`/api/Tasks`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public getTasksId(id: string): Observable<TaskModel> {
    const token = this.cookieService.get('token');
    return this.http.get<TaskModel>(`/api/Tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public getTasksdeskIdstatusId(deskId: string, statusId: string): Observable<TaskModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<TaskModel[]>(`/api/Tasks/${deskId}/${statusId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public postTasks(project: TaskModel): Observable<string> {
    const token = this.cookieService.get('token');
    return this.http.post<string>(`/api/Tasks`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public putTasks(project: TaskModel): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.put<boolean>(`/api/Tasks`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public deleteTasks(id: string): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.delete<boolean>(`/api/Tasks/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
