import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { LoginService } from './services/main/login.service';
import { ApplicationRoutes } from './models/applicationRoutes';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { CompanyCreateComponent } from './admin/company-create/company-create.component';
import { CompanyViewComponent } from './admin/company-view/company-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    AdminMainComponent,
    CompanyCreateComponent,
    CompanyViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ApplicationRoutes.routes, { useHash: true })
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
