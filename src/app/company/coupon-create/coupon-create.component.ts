import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company/company.service';
import { CouponType } from '../../models/couponType';
import { Coupon } from '../../models/coupon';


@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent implements OnInit {

  couponTypes = CouponType;
  coupon: Coupon;

  constructor(private companyService: CompanyService) {
    this.coupon = new Coupon(null, null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
  }

  public createCoupon() {
    this.companyService.createCoupon(this.coupon).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}
