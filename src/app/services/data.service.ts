import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { APIResponse } from '../interface/APIResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  BASE_URL = "http://localhost:2003/";

  getRequest(url: string, payload?: any, headers?: any): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.BASE_URL + url, { headers: headers, params: payload ,withCredentials : true}).pipe(catchError((error) => {
      // Handle the error here
      console.error('Error occurred:', error);
      return throwError(() => error); // Re-throw the error for external handling if needed
    }));
  }

  postRequest(url: string, payload?: any, headers?: any): Observable<APIResponse> {
    return this.http.post<APIResponse>(this.BASE_URL + url, payload, { headers: headers ,withCredentials : true }).pipe(catchError((error) => {
      // Handle the error here
      console.error('Error occurred:', error);
      return throwError(() => error); // Re-throw the error for external handling if needed
    }));
  }

  putRequest(url: string, payload?: any, headers?: any): Observable<APIResponse> {
    return this.http.put<APIResponse>(this.BASE_URL + url, payload, { headers: headers ,withCredentials : true }).pipe((error) => {
      // Handle the error here
      console.error('Error occurred:', error);
      return throwError(() => error); // Re-throw the error for external handling if needed
    })
  }

  deleteRequest(url: string, payload?: any, headers?: any): Observable<APIResponse> {
    return this.http.delete<APIResponse>(this.BASE_URL + url, { headers: headers, params: payload  ,withCredentials : true}).pipe((error) => {
      // Handle the error here
      console.error('Error occurred:', error);
      return throwError(() => error); // Re-throw the error for external handling if needed
    })
  }
}
