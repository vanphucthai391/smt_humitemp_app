import {AfterViewInit, Component ,OnInit,ViewChild} from '@angular/core';
import { TempHumiService } from '../shared/temp-humi.service';
import {FormControl, NgForm, Validators} from '@angular/forms';
import { DataReceive } from '../shared/data-receive.model';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule, MatSortable} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SpinnerService } from '../shared/spinner.service'; 
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.css'],
})

export class ComboboxComponent implements OnInit,AfterViewInit {
  constructor(public service: TempHumiService , private _liveAnnouncer: LiveAnnouncer, public spinnerService: SpinnerService){}
  //selectedModel: string = ''; // Sử dụng để lưu giá trị được chọn
  // selectedProcess:string='';
  // selectedInspect: string='';
  listProcess:string []=[];
  listInspect:string []=[];
  datareceive: DataReceive []=[];
  displayedColumns: string[] = ['serno', 'lot', 'inspectdate', 'inspectdata','judge'];
  dataSource = new MatTableDataSource<DataReceive>([]); // Initialize with an empty array
  @ViewChild(MatSort) sort!: MatSort;

ngOnInit(): void {
  this.service.Getcb();
}
ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
}
announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }

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
      this.service.GetInspect(this.service.formdata.model, process)
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
  onsubmit(form:NgForm){
    this.spinnerService.show();
    console.log(form.value);
    this.service.GetSpecific()
    .subscribe({
      next: res => {
        this.datareceive =res as DataReceive []
        this.dataSource.data = this.datareceive; // Update the dataSource with received data
      },
      error: err => {
        console.log("Error:", err);
      },
      complete: () => {
        this.spinnerService.hide();
      }
    });
    }
    
}
