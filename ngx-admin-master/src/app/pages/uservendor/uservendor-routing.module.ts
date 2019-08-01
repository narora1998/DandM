import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UservendorComponent } from "./uservendor.component";
import { ViewUserVendorComponent } from "./view/view.component";
import { AddUserVendorComponent } from "./add/add.component";

const routes: Routes = [
  {
    path: "",
    component: UservendorComponent,
    children: [
      {
        path: "view",
        component: ViewUserVendorComponent
      },
      {
        path: "add",
        component: AddUserVendorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UservendorRoutingModule {}

export const routedComponents = [
  UservendorComponent,
  AddUserVendorComponent,
  ViewUserVendorComponent
];
