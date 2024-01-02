import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { consignmentModel } from './consignmentModel';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

  constructor(private _http:HttpClient) { }
  public getConsignments():Observable<consignmentModel[]>{
    return this._http.get<consignmentModel[]>("http://localhost:8080/display");

  }
}
