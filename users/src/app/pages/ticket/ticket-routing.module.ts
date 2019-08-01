import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TicketComponent } from "./ticket.component";
import { AddTicketComponent } from "./add/add.component";
import { TreeGridComponent } from "./tree-grid/tree-grid.component";

const routes: Routes = [
  {
    path: "",
    component: TicketComponent,
    children: [
      {
        path: "add",
        component: AddTicketComponent
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
export class TicketRoutingModule {}

export const routedComponents = [
  TicketComponent,
  AddTicketComponent,
  //ViewTicketComponent
  TreeGridComponent
];
