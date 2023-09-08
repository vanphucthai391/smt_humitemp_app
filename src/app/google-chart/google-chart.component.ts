import { Component, OnInit } from '@angular/core';
import { TempHumiService } from '../shared/temp-humi.service';
import { interval } from 'rxjs';
import {TempHumi}  from '../shared/temp-humi.model';
declare var google: any; // Khai báo biến global cho Google Charts
@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {
constructor(private service: TempHumiService ){}
ngOnInit(): void {
  google.charts.load('current', {'packages':['gauge', 'corechart']});
  google.charts.setOnLoadCallback(this.drawChart.bind(this));
}
drawChart(): void {
  this.drawGaugeChart();
  this.drawLineChart();
  this.drawGaugeChartTemp();
  this.drawLineChartTemp();
}
drawGaugeChart(): void { 
  const data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Humidity %', 0],
    //['Temp °C', 0],
  ]);
  /*****************************************************************/
  var options = {
    width: 200, height: 200,
    //redFrom: 40, redTo: 100,
    //yellowFrom: 20, yellowTo: 23,
    minorTicks: 5
  };
  const chart = new google.visualization.Gauge(
    document.getElementById('google-chart')
  );
  chart.draw(data, options);
  interval(1000)
  .subscribe(()=>{
    this.service.refreshdatath();
    data.setValue(0, 1, this.service.datath.humidity); // Cập nhật giá trị độ ẩm
    //data.setValue(1, 1, this.service.datath.temp); // Cập nhật giá trị độ ẩm
    chart.draw(data, options);
  });
}
drawLineChart(): void {
  var data1 = new google.visualization.DataTable();
  data1.addColumn('datetime', 'Time'); // Sửa kiểu dữ liệu thành 'datetime'
  data1.addColumn('number', 'Humidity');
  var options = {
    title: 'Humidity over Time',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  //ok
  interval(1000)
  .subscribe(()=>{
    this.service.refreshlist();
    data1.removeRows(0, data1.getNumberOfRows()); // Xóa dữ liệu cũ
    this.service.list.forEach((item:TempHumi)=>{
      const inspectdate = new Date(item.inspectdate);
      const humidity = item.humidity;
      data1.addRow([inspectdate, humidity]); // Thêm dữ liệu mới
    })
    const chart = new google.visualization.LineChart(
      document.getElementById('line-chart')
    );
    chart.draw(data1, options);
  });
}
drawGaugeChartTemp(): void { 
  const data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temp °C', 0],
    //['Temp °C', 0],
  ]);
  /*****************************************************************/
  var options = {
    width: 200, height: 200,
    //redFrom: 40, redTo: 100,
    //yellowFrom: 20, yellowTo: 23,
    minorTicks: 5
  };
  const chart = new google.visualization.Gauge(
    document.getElementById('google-chart-temp')
  );
  chart.draw(data, options);
  interval(1000)
  .subscribe(()=>{
    this.service.refreshdatath();
    data.setValue(0, 1, this.service.datath.temp); // Cập nhật giá trị độ ẩm
    //data.setValue(1, 1, this.service.datath.temp); // Cập nhật giá trị độ ẩm
    chart.draw(data, options);
  });
}

drawLineChartTemp(): void {
  var data1 = new google.visualization.DataTable();
  data1.addColumn('datetime', 'Time'); // Sửa kiểu dữ liệu thành 'datetime'
  data1.addColumn('number', 'Temperature');
  var options = {
    title: 'Temperature over Time',
    curveType: 'function',
    legend: { position: 'bottom' }
  };
  //ok
  interval(1000)
  .subscribe(()=>{
    this.service.refreshlist();
    data1.removeRows(0, data1.getNumberOfRows()); // Xóa dữ liệu cũ
    this.service.list.forEach((item:TempHumi)=>{
      const inspectdate = new Date(item.inspectdate);
      const temp = item.temp;
      data1.addRow([inspectdate, temp]); // Thêm dữ liệu mới
    })
    const chart = new google.visualization.LineChart(
      document.getElementById('line-chart-temp')
    );
    chart.draw(data1, options);
  });
}

}
