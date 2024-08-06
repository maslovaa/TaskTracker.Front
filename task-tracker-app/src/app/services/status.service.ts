import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusModel } from '../models/status-model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  public getStatusesId(id: string): Observable<StatusModel> {
    return this.http.get<StatusModel>(`/api/Statuses/${id}`);
  }

  public getStatuses(): Observable<StatusModel[]> {
    return this.http.get<StatusModel[]>(`/api/Statuses`);
  }
}
