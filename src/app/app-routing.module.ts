import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {MapComponent} from "./Components/map/map.component";
import {SourcesComponent} from "./Components/sources/sources.component";
import {AboutComponent} from "./Components/about/about.component";



const routes: Routes = [
  {path: '' , redirectTo:'/dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'map', component:MapComponent},
  {path:'sources', component:SourcesComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
