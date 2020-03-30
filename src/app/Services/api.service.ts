import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

const url = 'https://api.covid19india.org/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getIndiaCurveData(): Observable<any>{
      return this.http.get(url+'data.json');
  }

  getStatesData(): any[]{
    var statedata: any=[];
    this.http.get(url+'data.json').subscribe(data => {
      data['statewise'].forEach(item => {
        statedata.push({
          active: item['active'],
          confirmed: item['confirmed'],
          deaths: item['deaths'],
          delta: item['delta'],
          lastupdatedtime: item['lastupdatedtime'],
          recovered: item['recovered'],
          state: item['state']
        })
      })
    });
    return statedata;
  }
}

