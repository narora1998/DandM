import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-view-uservendor",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewUserVendorComponent {
  uservendor: any;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      confirmSave: true,
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
      email: {
        title: "Email",
        type: "string"
      },
      pass: {
        title: "Password",
        type: "string"
      },
      mbl: {
        title: "Mobile",
        type: "number"
      },
      address: {
        title: "Address",
        type: "string"
      },
      category1: {
        title: "Category",
        type: "array"
      },
      balance: {
        title: "Balance",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private service: SmartTableData,
    public apiService: ApiserviceService
  ) {
    this.getdata();
  }

  getdata() {
    this.apiService.uservendorView().subscribe((data: any) => {
      console.log(data);
      this.uservendor = data;

      for (var j = 0; j < this.uservendor.data.length; j++) {
        var abc = [];
        for (var i = 0; i < this.uservendor.data[j].category.length; i++) {
          abc.push(this.uservendor.data[j].category[i].name);
        }

        this.uservendor.data[j].category1 = abc.join(",");
      }
      this.source.load(this.uservendor.data);
    });
  }

  updateRecord(event): void {
    if (window.confirm("Are you sure you want to edit?")) {
      console.log(event);

      this.apiService
        .userVendorUpdate(
          event.newData._id,
          event.newData.name,
          event.newData.email,
          event.newData.pass,
          event.newData.mbl,
          event.newData.address,
          event.newData.category,
          event.newData.balance
        )
        .subscribe(() => {
          console.log("returned");
          this.getdata();
        });
    } else {
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log(event);
      this.apiService.userVendorDelete(event.data._id).subscribe(() => {
        console.log(event.data._id + " deleted");
        this.getdata();
        // this.apiService.uservendorView().subscribe((data: any) => {
        //   console.log(data);
        //   this.uservendor = data;

        //   this.source.load(this.uservendor.data);
        // });
      });
    } else {
    }
  }
}
