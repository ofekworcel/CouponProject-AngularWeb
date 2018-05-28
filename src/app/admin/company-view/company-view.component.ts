import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Company } from '../../models/company';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {

  companies: any[];

  constructor(private adminService: AdminService) { 
    this.companies = null;
  }

  ngOnInit() {
  }

  public getCompanies() {
    this.adminService.getCompanies().subscribe(
      res => {
        this.companies = res;
        this.companies.forEach(obj => {
          obj.isRemoved = false;
          obj.isUpdated = false;
        });
        console.log(this.companies);
      },
      err => {
        console.log(err);
      }
    );
  }

  public removeSelectedCompanies() {
    this.companies.forEach(company => {
      if(company.isRemoved)
        this.removeCompany(company);
    });
  }

  async removeCompany(company) {
    var obs: Observable<any> = this.adminService.deleteCompany(company.id);
    obs.subscribe(res => {
      let i = 0;
      for(i; i < this.companies.length; i++)  {
        if(this.companies[i].id == company.id) {
          this.companies.splice(i, 1);
          break;
        }
      }
    }, err => {
      console.log(err);
    });
  }

  public checkRemove(id: number) {
    this.companies.forEach(company => {
      if(company.id == id)
        company.isRemoved = true;
    });
  }

}
