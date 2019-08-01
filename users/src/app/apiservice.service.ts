import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { id } from "@swimlane/ngx-charts/release/utils";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  //user vendor metthods
  userVendorAdd($name, $email, $pass, $mbl, $address, $category, $balance) {
    console.log("userVendorAdd() in service file called.");
    const obj = {
      name: $name,
      email: $email,
      pass: $pass,
      mbl: $mbl,
      address: $address,
      category: $category,
      balance: $balance
    };

    return this.http.post("http://localhost:3000/api/uservendorsignup", obj);
  }

  //user vendor login
  userVendorLogin(email, pass) {
    console.log("userVendorLogin() in service file called");
    const obj = {
      email: email,
      pass: pass
    };
    return this.http.post("http://localhost:3000/api/uservendorlogin", obj);
  }

  //user lead display
  userLeadDisplay() {
    console.log("userLeadDisplay() in service called");
    console.log(localStorage.getItem("authToken"));
    // var headers = new HttpHeaders().append("Authorization",localStorage.getItem("authToken"));
    return this.http.post(
      "http://localhost:3000/api/userlead",
      {},
      {
        headers: new HttpHeaders().append(
          "Authorization",
          localStorage.getItem("authToken")
        )
      }
    );
  }

  userBalanceUpdate(_id) {
    console.log("userBalanceUpdate() in service file called.");
    //console.log(localStorage.getItem("authToken"));
    return this.http.post(
      "http://localhost:3000/api/buylead",
      { id: _id },
      {
        headers: new HttpHeaders().append(
          "Authorization",
          localStorage.getItem("authToken")
        )
      }
    );
  }

  generateTicket(title, description) {
    console.log("generateTicket() in service file called.");
    const obj = {
      title: title,
      description: description
    };
    return this.http.post("http://localhost:3000/api/generateticket", obj);
  }

  userTicketDisplay() {
    console.log("ticketView() in service called");
    return this.http.post(
      "http://localhost:3000/api/userticket",
      {},
      {
        headers: new HttpHeaders().append(
          "Authorisation",
          localStorage.getItem("authToken")
        )
      }
    );
  }
}
