import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoryComponent } from "./category.component";

import { AddCategoryComponent } from "./add/add.component";
import { ViewCategoryComponent } from "./view/view.component";

const routes: Routes = [
  {
    path: "",
    component: CategoryComponent,
    children: [
      {
        path: "add",
        component: AddCategoryComponent
      },
      {
        path: "view",
        component: ViewCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {}

export const routedComponents = [
  CategoryComponent,

  AddCategoryComponent,
  ViewCategoryComponent
];
