import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-add-lead",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddLeadComponent implements OnInit {
  category: any;
  dp1: any = [];
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};

  ngOnInit() {
    this.apiService.categoryView().subscribe(categorypicker => {
      console.log(categorypicker);
      //this.category = categorypicker;
      this.dropdownList = categorypicker;
      for (var i = 0; i < this.dropdownList.data.length; i++) {
        var abc = {
          item_text: this.dropdownList.data[i].name,
          item_id: this.dropdownList.data[i]._id
        };
        this.dp1.push(abc);
      }
    });

    this.dropdownSettings = {
      singleSelection: true,
      idField: "_id",
      textField: "name",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  constructor(public apiService: ApiserviceService) {}

  leadAdd(name, mbl, scope, location, time, price) {
    this.apiService
      .leadAdd(name, mbl, scope, this.selectedItems, location, time, price)
      .subscribe(data => {
        console.log(data);
      });
  }
}
