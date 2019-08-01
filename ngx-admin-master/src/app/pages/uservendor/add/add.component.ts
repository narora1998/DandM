import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-add-uservendor",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddUserVendorComponent implements OnInit {
  category: any;
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: any = {};
  source: LocalDataSource = new LocalDataSource();

  constructor(public apiservice: ApiserviceService) {}

  ngOnInit() {
    this.apiservice.categoryView().subscribe(categorypicker => {
      //console.log("Displaying category"); // returns an array having 2 fields name,_id
      console.log(categorypicker);
      //this.category = categorypicker;
      this.dropdownList = categorypicker;

      this.dropdownSettings = {
        singleSelection: false,
        idField: "_id",
        textField: "name",
        selectAllText: "Select All",
        unSelectAllText: "UnSelect All",
        enableSearchFilter: true,
        classes: "myclass custom-class"
      };
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  addUserVendor(name, email, pass, mbl, address, balance) {
    console.log("before sending category array , selected values are:");
    console.log(this.selectedItems);
    //console.log(category);
    this.apiservice
      .userVendorAdd(
        name,
        email,
        pass,
        mbl,
        address,
        this.selectedItems,
        balance
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
