import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import{TempHumi} from '../shared/temp-humi.model'
import{ environment} from 'src/environments/environment.development'
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { DataInPut } from './data-input.model';

@Injectable({
  providedIn: 'root'
})
export class TempHumiService {
  url:string = environment.apiBaseUrl+'/api/TempAndHumi/th'
  urllist:string = environment.apiBaseUrl+'/api/TempAndHumi'
  urlgetcb:string = environment.apiBaseUrl+'/api/TempAndHumi/Getcombobox'
  urlgetprocess:string = environment.apiBaseUrl+'/api/TempAndHumi/Getprocess'
  urlgetinspect:string = environment.apiBaseUrl+'/api/TempAndHumi/GetInspect'
  urlsearchdata:string = environment.apiBaseUrl+'/api/TempAndHumi/GetSpecific'
  formdata:DataInPut =new DataInPut();
  datath: TempHumi = new TempHumi();
  list: TempHumi[] = [];
  listgetcb: string[] = [];

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
  Getcb(){
    this.http.get(this.urlgetcb)
    .subscribe({
      next:res=>{this.listgetcb =res as string[]},
      error:err=>{console.log(err)}
    })
  }
  GetProcess(selectedModel: string){
    const dataToSend = { model: selectedModel }
    return this.http.post(this.urlgetprocess, dataToSend);
  }
  GetInspect(selectedModel: string,selectedProcess: string){
    const dataToSend = { model: selectedModel,process: selectedProcess}
    return this.http.post(this.urlgetinspect, dataToSend);
  }
  GetSpecific(){
    return this.http.post(this.urlsearchdata, this.formdata);
  }

}
