import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TransactionComponent } from "./transaction.component";
import { ViewTransactionComponent } from "./view/view.component";
import { AddTransactionComponent } from "./add/add.component";

const routes: Routes = [
  {
    path: "",
    component: TransactionComponent,
    children: [
      {
        path: "view",
        component: ViewTransactionComponent
      },
      {
        path: "add",
        component: AddTransactionComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {}

export const routedComponents = [
  TransactionComponent,
  ViewTransactionComponent,
  AddTransactionComponent
];
