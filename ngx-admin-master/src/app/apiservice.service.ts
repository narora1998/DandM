import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { id } from "@swimlane/ngx-charts/release/utils";

@Injectable({
  providedIn: "root"
})
export class ApiserviceService {
  constructor(private http: HttpClient) {}

  //category methods
  categoryAdd($name) {
    console.log("categoryAdd() in service file called");
    //console.log($name);
    const obj = {
      name: $name
    };
    return this.http.post("http://localhost:3000/api/categoryadd", obj);
  }

  categoryView() {
    console.log("categoryView() in service file called");
    return this.http.get("http://localhost:3000/api/categoryview");
  }

  categoryDelete(del_id) {
    console.log("categoryDelete() in service file called");
    return this.http.post("http://localhost:3000/api/categorydelete", {
      del_id
    });
  }

  categoryUpdate(_id, name) {
    console.log("categoryUpdate() in service file called");
    const obj = {
      _id: _id,
      name: name
    };
    return this.http.post("http://localhost:3000/api/categoryedit", obj);
  }

  //transaction methods
  transactionAdd($name, $amount) {
    console.log("transactionAdd() in service file called");
    const obj = {
      name: $name,
      amount: $amount
    };

    return this.http.post("http://localhost:3000/api/transactionadd", obj);
  }

  transactionView() {
    console.log("transactionView() in service file called.");
    return this.http.get("http://localhost:3000/api/transactionview");
  }

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

  uservendorView() {
    console.log("userVendorView() in service file called.");
    return this.http.get("http://localhost:3000/api/uservendorview");
  }

  userVendorDelete(del_id) {
    console.log("userVendorDelete() in service file called.");
    return this.http.post("http://localhost:3000/api/uservendordelete", {
      del_id
    });
  }

  userVendorUpdate(_id, name, email, pass, mbl, address, category, balance) {
    const obj = {
      _id: _id,
      name: name,
      email: email,
      pass: pass,
      mbl: mbl,
      address: address,
      category: category,
      balance: balance
    };
    console.log("userVendorUpdate() in service file called");
    console.log(obj);
    return this.http.post("http://localhost:3000/api/uservendoredit", obj);
  }

  //lead methods
  leadAdd($name, $mbl, $scope, $category, $location, $time, $price) {
    console.log("leadAdd() in service file called.");
    const obj = {
      name: $name,
      mbl: $mbl,
      scope: $scope,
      category: $category,
      location: $location,
      time: $time,
      price: $price
    };
    return this.http.post("http://localhost:3000/api/leadadd", obj);
  }

  leadView() {
    console.log("leadView() in service file called.");
    return this.http.get("http://localhost:3000/api/leadview");
  }

  leadDelete(del_id) {
    console.log("leaddDelete() in service file called");
    return this.http.post("http://localhost:3000/api/leaddelete", { del_id });
  }

  leadUpdate(_id, name, mbl, scope, category, location, time, price) {
    console.log("leadUpdate() in service file called");
    const obj = {
      _id: _id,
      name: name,
      mbl: mbl,
      category: category,
      scope: scope,
      location: location,
      time: time,
      price: price
    };
    return this.http.post("http://localhost:3000/api/leadedit", obj);
  }
}
