import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin/admin.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

  showCustomers: boolean = false;
  customers: any[];
  modalRef: BsModalRef;


  constructor(private adminService: AdminService, private modalService: BsModalService) {
    this.customers = null;
   }

  ngOnInit() {
  }

  public getCustomers() {
    if (this.showCustomers) { this.showCustomers = false; }else this.showCustomers = true;

    this.adminService.getCustomers().subscribe(
      res => {
        console.log(res);
        console.log("Above is res");
        for (let obj of res)
        {
            obj.isRemoved = false;
            obj.isUpdated = false;
            obj.updateFailure = "white";
        };
        this.customers = res;
        console.log(this.customers);
      },
      err => {
        console.log(err);
      }
    );
  }

  public removeSelectedCustomers() {
    for (let customer of this.customers)
    {
      if(customer.isRemoved)
      this.removeCustomer(customer);
    }
  }

  async removeCustomer(customer) {
    var obs: Observable<any> = this.adminService.deleteCustomer(customer.id);
    obs.subscribe(res => {
      let i = 0;
      for(i; i < this.customers.length; i++)  {
        if(this.customers[i].id == customer.id) {
          this.customers.splice(i, 1);
          break;
        }
      }
    }, err => {
      console.log(err);
    });
  }

  public updateSelectedCustomers() {
    this.customers.forEach(customer => {
      if(customer.isUpdated == true)
        this.updateCustomer(customer).then();
    });
  }

  async updateCustomer(customer) {
    this.adminService.updateCustomer(customer as Customer).subscribe(
      res => {
        if(res.code == 0)
          customer.updateFailure = "white"
        else  
          customer.updateFailure = "red";
      }, 
      err => {
        customer.updateFailure = "red";
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

}
