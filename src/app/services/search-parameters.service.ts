import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchParametersService {

  constructor() { }

  static velocity: number;
  static distance: number;
  static dilatedTime: number;
}
