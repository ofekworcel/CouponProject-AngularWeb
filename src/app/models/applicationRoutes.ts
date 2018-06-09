import { Route } from "@angular/router";
import { MainComponent } from "../main/main/main.component";
import { AdminMainComponent } from "../admin/admin-main/admin-main.component";
import { CompanyMainComponent } from "../company/company-main/company-main.component";
import { CompanyViewComponent } from "../admin/company-view/company-view.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export class ApplicationRoutes {

    public static routes: Route[] = [
        { path: "", pathMatch: "full", redirectTo: "main" },
        { path: "main", component: MainComponent },
        { path: "admin", component: AdminMainComponent },
        { path: "company", component: CompanyMainComponent },
        { path: "**", component: PageNotFoundComponent }
       
    ];

}

