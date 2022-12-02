import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpserviceService } from './empservice.service';

@Component({
  selector: 'app-empformpage',
  templateUrl: './empformpage.component.html',
  styleUrls: ['./empformpage.component.scss']
})
export class EmpformpageComponent {

  public empform!: FormGroup;


  constructor(private form: FormBuilder, private emp: EmpserviceService) {

  }


  ngOnInit(): void {
    this.empform = this.form.group({
      name: [''],
      addr: [''],
      city: ['']
    })
  }

  finaldata: any
  submit() {
    console.log(this.empform.value)
    this.emp.submitdata(this.empform.value).subscribe(responseList => {
      this.finaldata = responseList
      console.log(this.finaldata)
    })

  }



}
