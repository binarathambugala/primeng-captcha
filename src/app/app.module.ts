import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { CaptchaModule } from "primeng/captcha";

@NgModule({
  imports: [BrowserModule, FormsModule, CaptchaModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
