import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project-model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<ProjectModel[]> {
    return this.http.get<ProjectModel[]>(`/api/Projects`);
  }

  public getProjectsId(id: string): Observable<ProjectModel> {
    return this.http.get<ProjectModel>(`/api/Projects/${id}`);
  }

  public postProjects(project: ProjectModel): Observable<string> {
    return this.http.post<string>(`/api/Projects`, project);
  }

  public putProjects(project: ProjectModel): Observable<boolean> {
    return this.http.put<boolean>(`/api/Projects`, project);
  }

  public deleteProjects(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`/api/Projects/${id}`);
  }
}
