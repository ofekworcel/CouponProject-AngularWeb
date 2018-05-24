import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Company } from '../../models/company';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.css']
})
export class CompanyViewComponent implements OnInit {

  companies: Company[];

  constructor(private adminService: AdminService) { 
    this.companies = null;
  }

  ngOnInit() {
  }

  public getCompanies() {
    this.adminService.getCompanies().subscribe(
      res=>this.companies = res,
      error=> console.log(error)
    );
  }
}
