import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComboboxComponent } from './combobox/combobox.component';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { TempHumiComponent } from './temp-humi/temp-humi.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ComboboxComponent },
  { path: 'googlechart', component: GoogleChartComponent },
  { path: 'history', component: TempHumiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
