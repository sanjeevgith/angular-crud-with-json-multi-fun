import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { parse } from 'path';
import { stringify } from 'querystring';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http: HttpClient) { }




  // firstnodejsproject for backend

  submitdata(data: any) {
    //console.log(data)
    return this.http.post("http://localhost:3000/api/emp/add_emp", data)
  }



  getalldata(): Observable<any> {
    return this.http.get("http://localhost:3000/api/emp/get_emp")
  }



  updateEmp(data: any, id: number) {
    //console.log(data, id)
    return this.http.patch("http://localhost:3000/api/emp/update_emp/"+ id, data)
  }

  delEmp(id: number) {
    //console.log(id, "deleteID")
    return this.http.delete("http://localhost:3000/api/emp/delete_emp/" + id)
  }



}
