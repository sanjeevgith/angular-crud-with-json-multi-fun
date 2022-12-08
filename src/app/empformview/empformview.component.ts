import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpserviceService } from '../empformpage/empservice.service';
import { EmpModel } from './emp.model';

@Component({
  selector: 'app-empformview',
  templateUrl: './empformview.component.html',
  styleUrls: ['./empformview.component.scss']
})
export class EmpformviewComponent implements OnInit {

  alldatares!: object;

  employeeModelObj: EmpModel = new EmpModel();

  public formvalue!: FormGroup
  constructor(private fb: FormBuilder, private emp: EmpserviceService) {

  }

  ngOnInit(): void {
    this.formvalue = this.fb.group({
      name: ['', [Validators.required]],
      addr: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })
    this.alldata();
  }

  Editresponse: any
  editclick() {
    this.employeeModelObj.name = this.formvalue.value.name;
    this.employeeModelObj.addr = this.formvalue.value.addr;
    this.employeeModelObj.city = this.formvalue.value.city;
    // console.log(this.employeeModelObj, "modelclickdata")
    this.emp.updateEmp(this.employeeModelObj, this.employeeModelObj.id).subscribe((response) => {
      this.Editresponse = response;
      this.formvalue.reset()
      this.ngOnInit();
    })
  }



  onEdit(row: any) {
    this.employeeModelObj.id = row.id;
    this.formvalue.controls['name'].setValue(row.name);
    this.formvalue.controls['addr'].setValue(row.address.addr);
    this.formvalue.controls['city'].setValue(row.address.city);

  }

  finalresponse: any
  onDelete(row: any) {
    this.emp.delEmp(row.id).subscribe(responseList => {
      alert("Emp Deleted")
      this.ngOnInit()
    })
  }



  temp: any;
  tempaddr = [] = [];
  alldata() {
    this.emp.getalldata().subscribe((response) => {
      for (let i = 0; i < response.response.length; i++) {
        //console.log(response.response)
        this.temp = response.response
      }
    })
  }






}
