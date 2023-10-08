import { Injectable } from '@angular/core';
import { ExoplanetsAPIObject } from '../models/exoApi.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchParametersService {
  velocity!: number;
  distance!: number;
  travelTime!: number;
  dilatedTime!: number;
  destiny!: ExoplanetsAPIObject;

  constructor() { }

  /**
   * Turns distance in light years to light hours
   * @param distance in light years
   * @returns distance in light hours
   */
  lightYearToLightHour(distance: number) {
    return distance * 8766
  }

  distanceKmToLightYears(km: number) {
    const lightYearInKm: number = 9.461e12; // 1 light-year in kilometers
    return km / lightYearInKm;
  }
}
