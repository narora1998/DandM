import { NgModule } from "@angular/core";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule } from "@angular/forms";
import { ThemeModule } from "../../@theme/theme.module";
import {
  UservendorRoutingModule,
  routedComponents
} from "./uservendor-routing.module";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbButtonModule,
    UservendorRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [...routedComponents]
})
export class UservendorModule {}
