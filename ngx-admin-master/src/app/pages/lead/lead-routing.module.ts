import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LeadComponent } from "./lead.component";
import { AddLeadComponent } from "./add/add.component";
import { ViewLeadComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: LeadComponent,
    children: [
      {
        path: "add",
        component: AddLeadComponent
      },
      {
        path: "view",
        component: ViewLeadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule {}

export const routedComponents = [
  LeadComponent,
  AddLeadComponent,
  ViewLeadComponent
];
