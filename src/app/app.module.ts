import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasiccheckComponent } from './basiccheck/basiccheck.component';
import { AdvancecheckComponent } from './advancecheck/advancecheck.component';
import { FinalcheckComponent } from './finalcheck/finalcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    BasiccheckComponent,
    AdvancecheckComponent,
    FinalcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
