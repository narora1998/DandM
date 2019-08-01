import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import {
  TransactionRoutingModule,
  routedComponents
} from "./transaction-routing.module";

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TransactionRoutingModule,
    Ng2SmartTableModule,
    FormsModule
  ],
  declarations: [...routedComponents]
})
export class TransactionModule {}
