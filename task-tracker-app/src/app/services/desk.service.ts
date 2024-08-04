import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeskModel } from '../models/desk-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeskService {

  constructor(private http: HttpClient) { }

  public getDesks(): Observable<DeskModel[]> {
    return this.http.get<DeskModel[]>(`/api/Desks`);
  }

  public getDesksId(id: string): Observable<DeskModel> {
    return this.http.get<DeskModel>(`/api/Desks/${id}`);
  }

  public postDesks(project: DeskModel): Observable<string> {
    return this.http.post<string>(`/api/Desks`, project);
  }

  public putDesks(project: DeskModel): Observable<boolean> {
    return this.http.put<boolean>(`/api/Desks`, project);
  }

  public deleteDesks(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`/api/Desks/${id}`);
  }
}
