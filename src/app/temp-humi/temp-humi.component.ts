import { Component,OnInit } from '@angular/core';
import {TempHumiService} from '../shared/temp-humi.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-temp-humi',
  templateUrl: './temp-humi.component.html',
  styleUrls: ['./temp-humi.component.css']
})
export class TempHumiComponent implements  OnInit {
  constructor(public service:TempHumiService) { }
  ngOnInit(): void {
    interval(1000)
    .subscribe(()=>{
      this.service.refreshdatath();
    })
    interval(1000)
    .subscribe(()=>{
      this.service.refreshlist()});
    }
    

}
