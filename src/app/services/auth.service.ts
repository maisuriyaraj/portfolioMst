import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService : DataService) { }

  RegisterUser(payload : any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.dataService.postRequest("api/auth/register",payload).subscribe({
        next :(response) => {
          resolve(response);
        },
        error : (error) => {
          reject(error);
        }
      })
    })
  }

  LoginUser(payload : any):Promise<any>{
    return new Promise((resolve,reject)=>{
      this.dataService.postRequest("api/auth/login",payload).subscribe({
        next :(response) => {
          resolve(response);
        },
        error : (error) => {
          reject(error);
        }
      })
    })
  }
}
