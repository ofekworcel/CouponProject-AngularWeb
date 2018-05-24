import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInfo } from '../../models/loginInfo';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  public login(loginInfo: LoginInfo): Observable<any> {
    return this.http.post("http://localhost:8080/CouponsWeb/rest/AdminService/login", loginInfo, { withCredentials: true });
  }

}
