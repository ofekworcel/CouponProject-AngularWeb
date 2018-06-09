import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../../models/company';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _URL: string = "http://localhost:8080/CouponsWeb/rest/AdminService/";

  constructor(private http:HttpClient) { }

  //Company management functions
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


  //Customer management functions
  public createCustomer(customer: Customer): Observable<any> {
    console.log("admin create customer");
    return this.http.post(this._URL + "customer", customer);
  }

  public getCustomers(): Observable<any> {
    return this.http.get(this._URL + "customer");
  }

  public getCustomer(id: number): Observable<any> {
    return this.http.get(this._URL + "customerid?id=" + id);
  }

  public updateCustomer(customer: Customer): Observable<any>{
    return this.http.put(this._URL + "customer", customer);
  }

  public deleteCustomer(id: number): Observable<any>{
    return this.http.delete(this._URL + "customer/" + id);
  }

}
