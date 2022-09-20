import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {IData} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient:HttpClient) {
  }

  sendData(data:IData): Observable<IData>{
    // console.log('data', data)
    return this.httpClient.post<IData>(urls.API, data)
  }
}
