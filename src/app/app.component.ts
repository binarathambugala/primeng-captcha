import { Component } from "@angular/core";
import { MessageService } from "primeng/api";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}

  showResponse(event) {
    console.log(event.response);
  }
}
