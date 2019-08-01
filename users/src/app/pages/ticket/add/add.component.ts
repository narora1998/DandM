import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddTicketComponent {
  source: LocalDataSource = new LocalDataSource();

  constructor(private apiService: ApiserviceService) {}

  generateTicket(title, description) {
    this.apiService.generateTicket(title, description).subscribe(ticket => {
      console.log(ticket);
    });
  }
}
