import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Company } from '../../models/company';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {

  modalRef: BsModalRef;
  companies: any[];
  showCompanies: boolean = false;

  constructor(private adminService: AdminService, private modalService: BsModalService) { 
    this.companies = null;
  }

  ngOnInit() {
  }

  public getCompanies() {
    if (this.showCompanies) { this.showCompanies = false; }else this.showCompanies = true;

    this.adminService.getCompanies().subscribe(
      res => {
        console.log(res);
        console.log("Above is res");
        for (let obj of res)
        {
            obj.isRemoved = false;
            obj.isUpdated = false;
            obj.updateFailure = "white";
        };
        this.companies = res;
        console.log(this.companies);
      },
      err => {
        console.log(err);
      }
    );
  }

  public removeSelectedCompanies() {
    for (let company of this.companies)
    {
      if(company.isRemoved)
      this.removeCompany(company);
    }
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

  public updateSelectedCompanies() {
    this.companies.forEach(company => {
      if(company.isUpdated == true)
        this.updateCompany(company).then();
    });
  }

  async updateCompany(company) {
    this.adminService.updateCompany(company as Company).subscribe(
      res => {
        if(res.code == 0)
          company.updateFailure = "white"
        else  
          company.updateFailure = "red";
      }, 
      err => {
        company.updateFailure = "red";
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }
}