import { Component, OnInit } from '@angular/core';
import { LoginInfo } from '../../models/loginInfo';
import { UserType } from '../../models/userType';
import { LoginService } from '../../services/main/login.service';
import { ApplicationResponse } from '../../models/applicationResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loginInfo: LoginInfo;
  applicationResponse: ApplicationResponse;
  admin: string = UserType.ADMIN;
  company: string = UserType.COMPANY;
  customer: string = UserType.CUSTOMER;

  constructor(private loginService: LoginService, private router: Router) { 
    this.loginInfo = new LoginInfo(null, null, null);
    this.applicationResponse = null;
  }

  ngOnInit() {
  }

  public login(): void {
    let navigation = "admin";
    if(this.loginInfo.type == UserType.COMPANY)
      navigation = "company";
    else if(this.loginInfo.type == UserType.CUSTOMER)
      navigation = "customer";


    this.loginService.login(this.loginInfo).subscribe(
      res => {
        console.log(res);
        this.applicationResponse = res;
        this.applicationResponse.errorType = "success";
        setTimeout(
          ()=>{this.router.navigateByUrl(navigation)},
          1000);
      },
      error => {
        console.log(error);
        this.applicationResponse = error.error;
        this.applicationResponse.errorType = "danger";
      }
    )
  }
}
