import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  //post data
  getEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employee/', data);
  }

  //update data
  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employee/${id}`, data);
  }

  //fetch employee data
  getAllEmployee(): Observable<any> {
    return this.http.get('http://localhost:3000/employee');
  }

  //delete data
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }
}
