import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`/api/Tasks`);
  }

  public getTasksId(id: string): Observable<TaskModel> {
    return this.http.get<TaskModel>(`/api/Tasks/${id}`);
  }

  public getTasksdeskIdstatusId(deskId: string, statusId: string): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`/api/Tasks/${deskId}/${statusId}`);
  }

  public postTasks(project: TaskModel): Observable<string> {
    return this.http.post<string>(`/api/Tasks`, project);
  }

  public putTasks(project: TaskModel): Observable<boolean> {
    return this.http.put<boolean>(`/api/Tasks`, project);
  }

  public deleteTasks(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`/api/Tasks/${id}`);
  }
}
