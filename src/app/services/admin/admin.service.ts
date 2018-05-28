import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../../models/company';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _URL: string = "http://localhost:8080/CouponsWeb/rest/AdminService/";

  constructor(private http:HttpClient) { }

  public createCompany(company: Company): Observable<any> {
    return this.http.post(this._URL + "company", company);
  }

  public getCompanies(): Observable<any> {
    return this.http.get(this._URL + "company");
  }

  public getCompany(id: number): Observable<any> {
    return this.http.get(this._URL + "company?id=" + id);
  }

  public updateCompany(company: Company): Observable<any> {
    return this.http.put(this._URL + "company", company);
  }

  public deleteCompany(id: number): Observable<any> {
    return this.http.delete(this._URL + "company/" + id);
  }

}
