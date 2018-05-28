import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coupon } from '../../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private _URL = "http://localhost:8080/CouponsWeb/rest/CompanyService/";

  constructor(private http: HttpClient) {

  }

  public createCoupon(coupon: Coupon): Observable<any> {
    coupon.startDate = new Date(JSON.parse(JSON.stringify(coupon.startDate))).toISOString();
    coupon.endDate = new Date(JSON.parse(JSON.stringify(coupon.endDate))).toISOString();
    console.log(coupon);
    return this.http.post(this._URL + "coupon", coupon);
  }

}
