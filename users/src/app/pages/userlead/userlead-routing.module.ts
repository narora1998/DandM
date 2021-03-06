import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserLeadComponent } from "./userlead.component";
import { SmartTableComponent } from "./smart-table/smart-table.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";

const routes: Routes = [
  {
    path: "",
    component: UserLeadComponent,
    children: [
      {
        path: "smart-table",
        component: SmartTableComponent
      },
      {
        path: "tree-grid",
        component: TreeGridComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserLeadRoutingModule {}

export const routedComponents = [
  UserLeadComponent,
  SmartTableComponent,
  TreeGridComponent
];
