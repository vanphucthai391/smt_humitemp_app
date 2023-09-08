import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{TempHumi} from '../shared/temp-humi.model'
import{ environment} from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class TempHumiService {
  url:string = environment.apiBaseUrl+'/api/TempAndHumi/th'
  urllist:string = environment.apiBaseUrl+'/api/TempAndHumi'

  datath: TempHumi = new TempHumi();
  list: TempHumi[] = [];

  constructor(private http: HttpClient) { }

  refreshdatath(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{this.datath =res as TempHumi},
      error:err=>{console.log(err)}
    })
  }
  refreshlist(){
    this.http.get(this.urllist)
    .subscribe({
      next:res=>{this.list =res as TempHumi[]},
      error:err=>{console.log(err)}
    })
  }

}
