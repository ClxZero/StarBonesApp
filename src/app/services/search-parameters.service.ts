import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchParametersService {

  constructor() { }

  velocity!: number;
  distance!: number;
  dilatedTime!: number;
}
