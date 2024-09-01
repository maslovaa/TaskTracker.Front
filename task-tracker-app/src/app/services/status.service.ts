import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusModel } from '../models/status-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  public getStatusesId(id: string): Observable<StatusModel> {
    const token = this.cookieService.get('token');
    return this.http.get<StatusModel>(`/api/Statuses/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  public getStatuses(): Observable<StatusModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<StatusModel[]>(`/api/Statuses`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
  }
}
