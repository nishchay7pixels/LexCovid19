import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../Services/api.service";
import * as CanvasJS from '../../../assets/canvasjs.min.js';
import {ChartOptions, ChartType} from "chart.js";
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from "ng2-charts";
import {count} from "rxjs/operators";


@Component({
  selector: 'app-global-dashboard',
  templateUrl: './global-dashboard.component.html',
  styleUrls: ['./global-dashboard.component.css']
})
export class GlobalDashboardComponent implements OnInit {

  global_data: any[]=[];
  constructor(private api:ApiService) {
    monkeyPatchChartJsTooltip();
    //monkeyPatchChartJsLegend();
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Confirmed'], ['Death'], 'Recovered'];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];



  getWorldData(): void{
    this.api.getWorldData()
      .subscribe(data => {
        for(let count in data as any){
          this.global_data.push({label:count,info:data[count]});

        }
      });
    console.log(this.global_data);
    console.log("done00");
  }
  generateChart(event):void{
    var target = event.target || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
    for(var country of this.global_data){
      var cont = country['label'] + "";
      var info:any = [];
      info = country['info'];


      if (cont.toLowerCase() === value.toLowerCase()){
        //console.log(country['label']);

        this.pieChartData = [parseInt(info[info.length-1]['confirmed']),parseInt(info[info.length-1]['deaths']),parseInt(info[info.length-1]['recovered'])];
        console.log(info[info.length-1]);
      }
    }


  }


  ngOnInit(): void {
    this.getWorldData();
  }




}
