import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";
import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { LoginformComponent } from "./loginform/loginform.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FormsModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule
  ],
  declarations: [PagesComponent, LoginformComponent]
})
export class PagesModule {}
