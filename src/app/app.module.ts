import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { User1Module } from "./user1/user1.module";
import { CommonModule } from "@angular/common";
import { CustomDirective } from "./custom.directive";
import { CustomPipes } from "./custom.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [AppComponent,HeaderComponent,CustomDirective],
    bootstrap: [AppComponent],
    imports: [BrowserModule,User1Module,CommonModule,CustomPipes,FormsModule]
})
export class AppModule{}