import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../../models/company';
import { METHODS } from 'http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _URL: string = "http://localhost:8080/CouponsWeb/rest/AdminService/";

  constructor(private http:HttpClient) { }

  public createCompany(company: Company): Observable<any> {
    return this.http.post(this._URL + "company", company, { withCredentials: true });
  }

  public getCompanies(): Observable<any> {
    return this.http.get(this._URL + "company", { withCredentials: true });
  }
}
