import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent
      },
      {
        path: "iot-dashboard",
        component: DashboardComponent
      },
      {
        path: "layout",
        loadChildren: () =>
          import("./layout/layout.module").then(m => m.LayoutModule)
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then(m => m.FormsModule)
      },
      {
        path: "ui-features",
        loadChildren: () =>
          import("./ui-features/ui-features.module").then(
            m => m.UiFeaturesModule
          )
      },
      {
        path: "modal-overlays",
        loadChildren: () =>
          import("./modal-overlays/modal-overlays.module").then(
            m => m.ModalOverlaysModule
          )
      },
      {
        path: "category",
        loadChildren: () =>
          import("./category/category.module").then(m => m.CategoryModule)
      },
      {
        path: "lead",
        loadChildren: () => import("./lead/lead.module").then(m => m.LeadModule)
      },
      {
        path: "uservendor",
        loadChildren: () =>
          import("./uservendor/uservendor.module").then(m => m.UservendorModule)
      },
      {
        path: "transaction",
        loadChildren: () =>
          import("./transaction/transaction.module").then(
            m => m.TransactionModule
          )
      },
      {
        path: "extra-components",
        loadChildren: () =>
          import("./extra-components/extra-components.module").then(
            m => m.ExtraComponentsModule
          )
      },
      {
        path: "maps",
        loadChildren: () => import("./maps/maps.module").then(m => m.MapsModule)
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then(m => m.ChartsModule)
      },
      {
        path: "editors",
        loadChildren: () =>
          import("./editors/editors.module").then(m => m.EditorsModule)
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./tables/tables.module").then(m => m.TablesModule)
      },
      {
        path: "miscellaneous",
        loadChildren: () =>
          import("./miscellaneous/miscellaneous.module").then(
            m => m.MiscellaneousModule
          )
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
// {
//   path: "**",
//   component: NotFoundComponent
// }
