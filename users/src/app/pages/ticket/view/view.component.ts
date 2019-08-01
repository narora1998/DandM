import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";
import { ApiserviceService } from "../../../apiservice.service";
@Component({
  selector: "ngx-view-category",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewCategoryComponent {
  category: any;
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
      // name: {
      //  from arryay //what to display on ngx will come here
      //   title: "Category",
      //   type: "string"
      // }
      title: {
        title: "Title",
        type: "string"
      },
      description: {
        title: "Description",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  // constructor(
  //   private service: SmartTableData,
  //   public apiservice: ApiserviceService
  // ) {
  //   //const data = this.service.getData();
  //   this.getData();
  // }

  // getData() {
  //   this.apiservice.userTicketDisplay().subscribe((data: any) => {
  //     console.log(data);
  //     this.category = data;
  //     this.source.load(this.category.data);
  //   });
  // }

  // onDeleteConfirm(event): void {
  //   console.log(event);
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     this.apiservice.ticketDelete(event.data._id).subscribe(() => {
  //       console.log(event.data._id + "deleted");
  //       this.apiservice.ticketView().subscribe(data => {
  //         console.log(data);
  //         this.category = data;
  //         this.source.load(this.category.data);
  //       });
  //     });
  //   } else {
  //   }
  // }

  // updateRecord(event): void {
  //   if (window.confirm("Are you sure you want to edit?")) {
  //     console.log(event);

  //     this.apiservice
  //       .ticketUpdate(event.newData._id, event.newData.name)
  //       .subscribe(() => {
  //         console.log("returned");
  //         this.getData();
  //       });
  //   } else {
  //   }
  // }
}
