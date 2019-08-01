import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbTreeGridModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { LeadRoutingModule, routedComponents } from "./lead-routing.module";
import { FormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    LeadRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    FormsModule,
    CommonModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [...routedComponents]
})
export class LeadModule {}
