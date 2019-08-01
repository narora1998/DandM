import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbTreeGridModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { TicketRoutingModule, routedComponents } from "./ticket-routing.module";
import { FsIconComponent } from "./tree-grid/tree-grid.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TicketRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    NbButtonModule
  ],
  declarations: [...routedComponents, FsIconComponent]
})
export class TicketModule {}
