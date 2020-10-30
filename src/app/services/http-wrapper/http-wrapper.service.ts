import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(
    private http: HttpClient
  ) { }


  public get(url, params?: any): Observable<any> {

    return this.http.get<any>(url, { params: this.serializeParams(params) });
  }

  private serializeParams(paramsObject?) {
    if (!paramsObject) {
      return;
    }

    let params: HttpParams = new HttpParams();

    for (let key in paramsObject) {
      if (paramsObject[key]) {
        params = params.append(key, paramsObject[key]);
      }
    }

    return params;
  }
}
