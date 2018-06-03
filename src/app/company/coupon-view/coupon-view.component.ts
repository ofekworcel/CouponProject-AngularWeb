import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyService } from '../../services/company/company.service';

@Component({
  selector: 'app-coupon-view',
  templateUrl: './coupon-view.component.html',
  styleUrls: ['./coupon-view.component.css']
})
export class CouponViewComponent implements OnInit {

  modalRef: BsModalRef;
  coupons: any[];


  constructor(private companyService: CompanyService, private modalService: BsModalService) { 
    this.coupons = null;
  }

  ngOnInit() {
  }


  public getAllCompanyCoupons() {
    this.companyService.getAllCompanyCoupons().subscribe(
      res => {
        
        res.forEach(obj => {
          obj.isRemoved = false;
          obj.isUpdated = false;
          obj.updateFailure = "white";
        });
        this.coupons = res;
        console.log(this.coupons);
      },
      err => {
        console.log(err);
      }
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


}
