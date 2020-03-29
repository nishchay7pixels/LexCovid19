import {Component, OnInit,} from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {ApiService} from "../../../Services/api.service";


@Component({
  selector: 'app-graph-dashboard',
  templateUrl: './graph-dashboard.component.html',
  styleUrls: ['./graph-dashboard.component.css']
})
export class GraphDashboardComponent implements OnInit{

  curve: any =[];
  lineChartLabels: Label[] = [];
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'New' },
    { data: [], label: 'Confirmed Cases'},
    { data: [], label: 'Recovered'}
  ];
  confirmedData: ChartDataSets[] = [
    { data: [], label: 'Confirmed Cases'}
  ];
  todayData: ChartDataSets[] = [
    { data: [], label: 'New' },
    { data: [], label: 'Death'},
    { data: [], label: 'Recovered'}
  ];
  constructor(private api: ApiService){

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
          this.lineChartLabels.push(item['date']);
          this.lineChartData[0].data.push(item['totalconfirmed']);
          this.lineChartData[1].data.push(item['totaldeceased']);
          this.lineChartData[2].data.push(item['totalrecovered']);
          this.todayData[0].data.push(item['dailyconfirmed']);
          this.todayData[1].data.push(item['dailydeceased']);
          this.todayData[2].data.push(item['dailyrecovered']);
        });

      });
    this.confirmedData[0].data=this.lineChartData[0].data;
    //console.log(this.curve);
  }



  //lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];



  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.28)',
    },
    {
      borderColor: 'black',
      backgroundColor: 'rgba(0,225,0,0.28)',
    },
    {
    borderColor: 'black',
    backgroundColor: 'rgba(0,0,255,0.28)'
    }
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {

    this.getTotalCurve();
  }

}
