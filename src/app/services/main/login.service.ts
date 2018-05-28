import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInfo } from '../../models/loginInfo';
import { UserType } from '../../models/userType';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public login(loginInfo: LoginInfo): Observable<any> {
    let service = "AdminService";
    if((loginInfo.type as UserType) === UserType.COMPANY)
      service = "CompanyService";
    else if(loginInfo.type === UserType.CUSTOMER)
      service = "CustomerService";
    return this.http.post("http://localhost:8080/CouponsWeb/rest/" + service + "/login", loginInfo, { withCredentials: true });
  }

}
