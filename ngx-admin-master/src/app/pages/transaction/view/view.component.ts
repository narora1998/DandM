import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-view-transaction",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewTransactionComponent {
  transaction: any;
  settings = {
    actions: false,
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: "Name",
        type: "string"
      },
      amount: {
        title: "Amount",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    public apiService: ApiserviceService
  ) {
    this.apiService.transactionView().subscribe(data => {
      console.log(data);
      this.transaction = data;
      this.source.load(this.transaction.data);
    });
  }

  onDeleteConfirm(event): void {}
}
