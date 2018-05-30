import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../../models/company';
import { AdminService } from '../../services/admin/admin.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  
  @Input() modalRef: BsModalRef;
  company: Company;

  constructor(private adminService: AdminService) {
    this.company = new Company(null, null, null, null);
  }

  ngOnInit() {
  }

  public createCompany() {
    console.log("CREATION");
    this.adminService.createCompany(this.company).subscribe(
      res=>console.log(res),
      error=>console.log(error)
    );
  }
}
