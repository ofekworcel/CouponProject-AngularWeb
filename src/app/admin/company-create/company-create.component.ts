import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../models/company';
import { AdminService } from '../../services/admin/admin.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApplicationResponse } from '../../models/applicationResponse';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  
  @Input() modalRef: BsModalRef;
  company: Company;
  applicationResponse: ApplicationResponse;

  constructor(private adminService: AdminService) {
    this.company = new Company(null, null, null, null);
  }

  ngOnInit() {
  }

  public createCompany() {
    console.log("CREATION");
    this.adminService.createCompany(this.company).subscribe(
      res=>{
      console.log(res);
      this.applicationResponse = res;
      this.applicationResponse.errorType = "success";
      },
      error=>{
        console.log(error);
        this.applicationResponse = error.error;
        this.applicationResponse.errorType = "danger";
      }
    );
  }
}
