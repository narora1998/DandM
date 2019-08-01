import { Component, OnInit } from "@angular/core";
import { ApiserviceService } from "../../apiservice.service";
import { Router } from "@angular/router";
import { timingSafeEqual } from "crypto";
import { ChartsComponent } from "../charts/charts.component";

@Component({
  selector: "ngx-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.scss"]
})
export class LoginformComponent implements OnInit {
  constructor(private apiservice: ApiserviceService, private router: Router) {}

  ngOnInit() {}
  email: any;
  pass: any;
  userVendorLogin(email, pass) {
    console.log(email, pass);
    this.apiservice.userVendorLogin(email, pass).subscribe((token: any) => {
      console.log(token);
      localStorage.setItem("authToken", token.token);
      this.router.navigate([`/pages/userlead/smart-table`]);
    });
  }
}
