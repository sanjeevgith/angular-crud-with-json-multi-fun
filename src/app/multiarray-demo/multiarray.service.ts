import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiarrayService {

  constructor(private http:HttpClient) { }



  getallmultiarraydata(): Observable<any> {
    return this.http.get("http://localhost:3000/data")
  }


  getallmultiarraydata1(): Observable<any> {
    return this.http.get("http://localhost:3000/data1")
  }


}
