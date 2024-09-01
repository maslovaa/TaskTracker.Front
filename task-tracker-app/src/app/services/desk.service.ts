import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeskModel } from '../models/desk-model';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getDesks(): Observable<DeskModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<DeskModel[]>(`/api/Desks`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public getDesksId(id: string): Observable<DeskModel> {
    const token = this.cookieService.get('token');
    return this.http.get<DeskModel>(`/api/Desks/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public postDesks(project: DeskModel): Observable<string> {
    const token = this.cookieService.get('token');
    return this.http.post<string>(`/api/Desks`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public putDesks(project: DeskModel): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.put<boolean>(`/api/Desks`, project, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public deleteDesks(id: string): Observable<boolean> {
    const token = this.cookieService.get('token');
    return this.http.delete<boolean>(`/api/Desks/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
