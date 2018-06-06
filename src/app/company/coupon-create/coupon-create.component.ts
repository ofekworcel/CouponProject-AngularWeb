import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { CouponType } from '../../models/couponType';
import { Coupon } from '../../models/coupon';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ApplicationResponse } from '../../models/applicationResponse';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent implements OnInit {

  applicationResponse: ApplicationResponse;
  couponTypes = CouponType;
  coupon: Coupon;
  @Input() modalRef: BsModalRef;

  constructor(private companyService: CompanyService) {
    this.coupon = new Coupon(null, null, null, null, null, CouponType.CAMPING, null, null, null);
  }

  ngOnInit() {
  }

  public createCoupon() {
    this.companyService.createCoupon(this.coupon).subscribe(
      res => {
        console.log(res);
        this.applicationResponse = res;
        this.applicationResponse.errorType = "success";
      },
      err => {
        console.log(err);
        this.applicationResponse = err.error;
        this.applicationResponse.errorType = "danger";
      }
    );
  }

}
