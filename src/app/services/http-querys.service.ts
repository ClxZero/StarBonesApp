import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable,
  catchError,
  retry,
  throwError,
} from 'rxjs';
import { ExoplanetApiResponse } from '../models/exoApi.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpQuerysService {
  private headers = new HttpHeaders({  
      'Content-Type': 'application/json',    
      'Access-Control-Allow-Origin': '*',  
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept',
      'Access-Control-Allow-Credentials': 'true'
    });
  
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(
      () =>
        new Error(
          `There was an error. please try later. Error: ${error.message} ${error}`
        )
    );
  }

  getExoplanetList(page = 0): Observable<ExoplanetApiResponse> {
    return this.http
      .get<any>(
        `https://exoplanets.nasa.gov/api/v1/planets/?order=display_name+asc&per_page=15&page=${page}&search=`
      )
      .pipe(retry(3), catchError(this.handleError));
  }
}
