import { Component ,OnInit} from '@angular/core';
import { TempHumiService } from '../shared/temp-humi.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css']
})
export class ComboboxComponent implements OnInit {
  constructor(public service: TempHumiService ){}
  selectedModel: string = ''; // Sử dụng để lưu giá trị được chọn
  selectedProcess:string='';
  selectedInspect: string='';
  listProcess:string []=[];
  listInspect:string []=[];

ngOnInit(): void {
  this.service.Getcb();
}
onsubmit(form:NgForm){
}
  onDropModelChange(model:string){
    console.log("Selected Model:", model);
    this.service.GetProcess(model)
      .subscribe({
        next: res => {this.listProcess=res as string []
          console.log("Response:", res);
        },
        error: err => {
          console.log("Error:", err);
        }
      });
  }
  onDropProcessChange(process:string){
    console.log("Selected Process:", process); // Check the selected value
      this.service.GetInspect(this.selectedModel, process)
        .subscribe({
          next: res => {this.listInspect=res as string []
            console.log("Response:", res);
            // Update this.listProcess if needed
          },
          error: err => {
            console.log("Error:", err);
          }
        });
    }
}
