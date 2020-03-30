import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../Services/api.service";

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css']
})
export class TableDashboardComponent implements OnInit {

  stateData: any=[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.stateData=this.api.getStatesData();
    console.log(this.stateData);
  }

}
