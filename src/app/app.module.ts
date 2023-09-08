import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempHumiComponent } from './temp-humi/temp-humi.component';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

@NgModule({
  declarations: [
    AppComponent,
    TempHumiComponent,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
