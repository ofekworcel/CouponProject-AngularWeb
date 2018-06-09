import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from './app.routing';
import { CustomerViewComponent } from 'src/app/admin/customer-view/customer-view.component';
import { CustomerCreateComponent } from 'src/app/admin/customer-create/customer-create.component';


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
    KeysPipe,
    CustomerViewComponent,
    CustomerCreateComponent,
    PageNotFoundComponent,
  ],
  
  exports: [ RouterModule ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ApplicationRoutes.routes, { useHash: true }),
    ModalModule.forRoot(),
    routing
  ],
  providers: [LoginService, AdminService, DatePipe ,{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true } ],
  bootstrap: [AppComponent]
})



export class AppModule { }





