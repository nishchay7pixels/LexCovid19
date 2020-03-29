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
}

