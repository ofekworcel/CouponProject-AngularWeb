import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyService } from '../../services/company/company.service';
import { DatePipe } from '@angular/common';
import { CouponType } from '../../models/couponType';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin/admin.service';

@Component({
  selector: 'app-coupon-view',
  templateUrl: './coupon-view.component.html',
  styleUrls: ['./coupon-view.component.css']
})
export class CouponViewComponent implements OnInit {

  modalRef: BsModalRef;
  coupons: any[];
  couponTypes = CouponType;
  


  constructor(private companyService: CompanyService, 
              private modalService: BsModalService, private datePipe: DatePipe) { 
    this.coupons = null;
  }

  ngOnInit() {
  }


  public getAllCompanyCoupons() {
    this.companyService.getAllCompanyCoupons().subscribe(
      res => {
        
        res.forEach(obj => {
          for(let type in CouponType)
            if(type === obj.type){
              obj.type = CouponType[type];
              break;
            }
          obj.isRemoved = false;
          obj.isUpdated = false;
          obj.updateFailure = "white";
          obj.startDate = JSON.stringify(obj.startDate).slice(0, (JSON.stringify(obj.startDate).length - 6)) + '"';
          var date: Date = new Date(JSON.parse(obj.startDate));
          obj.startDate = date.toDateString();
          obj.startDate = this.datePipe.transform(date, 'yyyy-MM-dd');
          obj.endDate = JSON.stringify(obj.endDate).slice(0, (JSON.stringify(obj.endDate).length - 6)) + '"';
          date = new Date(JSON.parse(obj.endDate));
          obj.endDate = date.toDateString();
          obj.endDate = this.datePipe.transform(date, 'yyyy-MM-dd');
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
    this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
  }

  public removeSelectedCoupons() {
    for (let coupon of this.coupons)
    {
      if(coupon.isRemoved)
      this.removeCoupon(coupon);
    }
  }

  async removeCoupon(coupon) {
    var obs: Observable<any> = this.companyService.deleteCoupon(coupon.id);
    obs.subscribe(res => {
      let i = 0;
      for(i; i < this.coupons.length; i++)  {
        if(this.coupons[i].id == coupon.id) {
          this.coupons.splice(i, 1);
          break;
        }
      }
    }, err => {
      console.log(err);
    });
  }


}
