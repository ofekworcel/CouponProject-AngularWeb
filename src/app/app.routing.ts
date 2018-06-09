import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CompanyViewComponent } from "src/app/admin/company-view/company-view.component";
import { PageNotFoundComponent } from "src/app/page-not-found/page-not-found.component";
import { CustomerViewComponent } from "src/app/admin/customer-view/customer-view.component";


const appRoutes : Routes = [
    { path: "", component: CompanyViewComponent, outlet: "outlet1"},
    { path: "admin/customer", component: CustomerViewComponent, outlet: "outlet1"},
    { path: "**", component: PageNotFoundComponent, outlet: "outlet1"}
  ]


  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);