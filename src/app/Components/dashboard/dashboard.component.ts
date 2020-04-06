import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../Services/api.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  curve: any =[];

  data: any;
  newUpdate: any;

  timestamp: any;


  constructor(private api: ApiService){
   this.getTotalCurve();
  }

  getTotalCurve() {
    this.api.getIndiaCurveData()
      .subscribe(data => {
        data['cases_time_series'].forEach(item =>{
          this.curve.push({
            dailyconfirmed:item['dailyconfirmed'],
            dailydeceased:item['dailydeceased'],
            dailyrecovered:item['dailyrecovered'],
            date:item['date'],
            totalconfirmed:item['totalconfirmed'],
            totaldeceased:item['totaldeceased'],
            totalrecovered:item['totalrecovered']
          });
        });
        this.data = data['statewise'][0];
        this.newUpdate = this.data;
        this.timestamp = this.data['lastupdatedtime'];
        console.log(this.timestamp);

        });

    //console.log(this.curve);
  }


}
