import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { LoginService } from './services/main/login.service';
import { ApplicationRoutes } from './models/applicationRoutes';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { CompanyCreateComponent } from './admin/company-create/company-create.component';
import { CompanyViewComponent } from './admin/company-view/company-view.component';
import { MyInterceptor } from './interceptors/myInterceptor';
import { AdminService } from './services/admin/admin.service';
import { CompanyMainComponent } from './company/company-main/company-main.component';
import { CouponViewComponent } from './company/coupon-view/coupon-view.component';
import { CouponCreateComponent } from './company/coupon-create/coupon-create.component';
import { KeysPipe } from './pipes/keys.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AdminMainComponent,
    CompanyCreateComponent,
    CompanyViewComponent,
    CompanyMainComponent,
    CouponViewComponent,
    CouponCreateComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ApplicationRoutes.routes, { useHash: true }),
    ModalModule.forRoot()
  ],
  providers: [LoginService, AdminService, DatePipe
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
