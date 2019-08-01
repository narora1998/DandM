import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  UserLeadRoutingModule,
  routedComponents
} from "./userlead-routing.module";
import { FsIconComponent } from "./tree-grid/tree-grid.component";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    UserLeadRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [...routedComponents, FsIconComponent]
})
export class UserLeadModule {}
