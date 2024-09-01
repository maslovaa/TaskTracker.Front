import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getProjects(): Observable<ProjectModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<ProjectModel[]>(`/api/Projects`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public getProjectsId(id: string): Observable<ProjectModel> {
    const token = this.cookieService.get('token');
    return this.http.get<ProjectModel>(`/api/Projects/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public postProjects(project: ProjectModel): Observable<string> {
    const token = this.cookieService.get('token');
    return this.http.post<string>(`/api/Projects`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public putProjects(project: ProjectModel): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.put<boolean>(`/api/Projects`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public deleteProjects(id: string): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.delete<boolean>(`/api/Projects/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
