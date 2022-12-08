import { Component } from '@angular/core';
import { MultiarrayService } from './multiarray.service';

@Component({
  selector: 'app-multiarray-demo',
  templateUrl: './multiarray-demo.component.html',
  styleUrls: ['./multiarray-demo.component.scss']
})
export class MultiarrayDemoComponent {




  constructor(private multiservice: MultiarrayService) { }



  ngOnInit(): void {
    this.dataarray();
    this.dataarray1();
  }




  temp: any
  finaldata: any
  dataarray() {
    this.multiservice.getallmultiarraydata().subscribe((responseList) => {
      for (let i = 0; i < responseList.length; i++) {
        this.temp = responseList;
      }
    })
  }


  finalnom: any
  finaladdr: any
  dataarray1() {
    this.multiservice.getallmultiarraydata1().subscribe((responseList) => {
      var demo = [];
      //for (let i = 0; i < responseList.length; i++) {

      var employeeIds = responseList.map((addrdata: any) => addrdata.address);
      console.log(employeeIds)

      this.finaladdr = employeeIds


      var employeeNo = responseList.map((nominyee: any) => nominyee.address[0].nominyee);
      console.log(employeeNo)

      this.finalnom = employeeNo




      // }
    })
  }















}
