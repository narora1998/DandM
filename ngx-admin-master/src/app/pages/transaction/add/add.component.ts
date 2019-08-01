import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";
@Component({
  selector: "ngx-add-transaction",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddTransactionComponent {
  constructor(public apiService: ApiserviceService) {}

  transactionAdd(name, amount) {
    console.log("Transaction name:" + name);
    console.log("Transaction amount:" + amount);
    this.apiService.transactionAdd(name, amount).subscribe(data => {
      console.log(data);
    });
  }
}
