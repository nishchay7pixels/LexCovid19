import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { GraphDashboardComponent } from './Components/dashboard/graph-dashboard/graph-dashboard.component';
import {ChartsModule} from "ng2-charts";
import {ClarityModule} from "@clr/angular";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TableDashboardComponent } from './Components/dashboard/table-dashboard/table-dashboard.component';
import { MapComponent } from './Components/map/map.component';
import { SourcesComponent } from './Components/sources/sources.component';
// import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { AboutComponent } from './Components/about/about.component';
import { GlobalDashboardComponent } from './Components/global-dashboard/global-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GraphDashboardComponent,
    TableDashboardComponent,
    MapComponent,
    SourcesComponent,
    AboutComponent,
    GlobalDashboardComponent,
  ],
  //using ng2-charts
  imports: [
    ChartsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,

  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
