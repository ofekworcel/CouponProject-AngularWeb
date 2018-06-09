import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApplicationResponse } from 'src/app/models/applicationResponse';
import { Customer } from 'src/app/models/customer';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  @Input() modalRef: BsModalRef;
  applicationResponse: ApplicationResponse;
  customer: Customer;

  constructor(private adminService: AdminService) {
    this.customer = new Customer(null,null,null);
   }

  ngOnInit() {
  }


  public createNewCustomer() {
    console.log("CREATION");
    this.adminService.createCustomer(this.customer).subscribe(
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
