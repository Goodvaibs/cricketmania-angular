import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class SubheaderService {

  constructor(private httpclient: HttpClient) { }

  getSubheaderList() {
    let headervar = new HttpHeaders()
    headervar = headervar.append('Content-Type','application/json');

    return this.httpclient.get('http://127.0.0.1:3000/subHeader',{headers:headervar})
  }
}
