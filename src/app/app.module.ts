import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempHumiComponent } from './temp-humi/temp-humi.component';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ComboboxComponent } from './combobox/combobox.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    TempHumiComponent,
    GoogleChartComponent,
    NavbarComponent,
    ComboboxComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
