import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../../../apiservice.service";
import { SmartTableData } from "../../../@core/data/smart-table";
import { SelectorListContext } from "@angular/compiler";
import { LocalDataSource } from "ng2-smart-table";

@Component({
  selector: "ngx-add-category",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddCategoryComponent {
  constructor(public apiservice: ApiserviceService) {}
  categoryAdd(name) {
    console.log(name);
    this.apiservice.categoryAdd(name).subscribe(data => {
      console.log(data);
    });
  }
}
