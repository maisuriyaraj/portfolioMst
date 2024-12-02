import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(private dataService: DataService, private cookieService: CookieService) { }

  createTemplate(payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const header = 'Bearer ' + this.cookieService.get("access_token")
      this.dataService.postRequest("api/template/create", payload, { 'Authorization': header }).subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (error) => {
          reject(error);
        }
      })
    })
  }

  getAllTemplates(): Promise<any> {
    return new Promise((resolve, reject) => {
      const header = 'Bearer ' + this.cookieService.get("access_token");
      this.dataService.getRequest("api/template/getTemplates", {}, { 'Authorization': header }).subscribe({
        next: (response) => {
          resolve(response);
        }, error: (error) => {
          reject(error);
        }
      })
    })
  }

  getTempatePreview(payload : any):Promise<any>{
    return new Promise((resolve,reject)=>{
      const header = 'Bearer ' + this.cookieService.get("access_token");
      this.dataService.getRequest("api/template/templatePreview", payload, { 'Authorization': header }).subscribe({
        next: (response) => {
          resolve(response);
        }, error: (error) => {
          reject(error);
        }
      })
    })
  }
}
