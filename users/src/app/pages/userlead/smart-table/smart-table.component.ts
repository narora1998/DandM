import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./smart-table.component.html",
  styleUrls: ["./smart-table.component.scss"]
})
export class SmartTableComponent {
  testdata: any;
  settings = {
    actions: { edit: false, add: false },
    //   edit: {
    //   confirmSave: true,
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>'
    // },
    delete: {
      deleteButtonContent: '<i class="nb-checkmark"></i>',
      confirmDelete: true
    },
    columns: {
      custName: {
        title: "Name",
        type: "text"
      },
      mbl: {
        title: "Mobile",
        type: "number"
      },
      scope: {
        title: "Scope",
        type: "string"
      },
      category: {
        title: "Category",
        type: "string"
      },
      price: {
        title: "Price",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    public apiService: ApiserviceService
  ) {
    this.apiService.userLeadDisplay().subscribe(userlead => {
      this.testdata = userlead;
      //console.log(this.testdata.leads[0][0].custName);
      //this.getdata(userlead);
      console.log(this.testdata.leads);
      console.log(this.testdata.leads[0][0]);
      var abc = [];
      for (var i = 0; i < this.testdata.leads.length; i++) {
        for (var j = 0; j < this.testdata.leads[i].length; j++) {
          var obj = {
            _id: this.testdata.leads[i][j]._id,
            custName: this.testdata.leads[i][j].custName,
            mbl: this.testdata.leads[i][j].mbl,
            scope: this.testdata.leads[i][j].scope,
            category: this.testdata.leads[i][j].category[0].name,
            price: this.testdata.leads[i][j].price
          };
          abc.push(obj);
        }
        //this.testdata.leads[i].category1 = abc.join(",");
      }
      console.log(abc);
      this.source.load(abc);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to buy?")) {
      console.log(event);
      console.log("Item purchased and updating balance");
      this.apiService.userBalanceUpdate(event.data._id).subscribe(data => {
        console.log("Lead Purchased");
      });
    }
  }
}
