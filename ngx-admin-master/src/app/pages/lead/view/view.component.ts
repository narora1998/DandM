import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";

@Component({
  selector: "ngx-view-lead",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewLeadComponent {
  lead: any;
  settings = {
    actions: { add: false },
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
      time: {
        title: "Time",
        type: "string"
      },
      location: {
        title: "Location",
        type: "string"
      },
      category1: {
        title: "Category",
        type: "array"
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
    this.getdata();
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log(event);
      this.apiService.leadDelete(event.data._id).subscribe(() => {
        console.log(event.data._id + " deleted");
        this.getdata();
      });
    } else {
    }
  }

  updateRecords(event): void {
    if (window.confirm("Are you sure you want to edit?")) {
      console.log(event.newData.price);
      console.log(event);
      this.apiService
        .leadUpdate(
          event.newData._id,
          event.newData.custName,
          event.newData.mbl,
          event.newData.scope,
          event.newData.category,
          event.newData.location,
          event.newData.time,
          event.newData.price
        )
        .subscribe(() => {
          console.log("returned");
          this.getdata();
        });
    } else {
    }
  }

  getdata() {
    this.apiService.leadView().subscribe((data: any) => {
      console.log(data);
      this.lead = data;

      for (var j = 0; j < this.lead.data.length; j++) {
        var abc = [];
        for (var i = 0; i < this.lead.data[j].category.length; i++) {
          abc.push(this.lead.data[j].category[i].name);
        }

        this.lead.data[j].category1 = abc.join(",");
      }
      this.source.load(this.lead.data);
    });
  }
}
