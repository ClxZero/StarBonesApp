import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from '../services/search-parameters.service';

@Component({
  selector: 'response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  timeDilation!: number;

  constructor(
    private router: Router,
    public searchParams: SearchParametersService
  ) {}

  ngOnInit() {
    this.timeDilation = this.calculateTimeDilation(this.searchParams.travelTime, this.searchParams.velocity);
  }

  /**
   * Calculate time dilation based on
   * @param timeTraveled in years
   * @param velocityPercentage as a percentage of the speed of light
   */
  calculateTimeDilation(
    timeTraveled: number,
    velocityPercentage: number
  ): number {
    // Convert velocity percentage to fraction of the speed of light
    const v = velocityPercentage / 100;
    // speed of light km/s
    const c = 299792458;
    console.log(Math.pow(v, 2) / Math.pow(c, 2),Math.pow(v, 2) ,Math.pow(c, 2))

    // Calculate time dilation using the equation
    const timeDilated =
      timeTraveled / Math.sqrt(1 - (Math.pow(v, 2) / Math.pow(c, 2)));

    return timeDilated;
  }

  velocityKmPerSecondToPercentageOfLightspeed(kmPerSecond: number) {
    const c = 299792458; // Speed of light in km/s
    const v = (kmPerSecond / c) * 100; // Convert to percentage
    return v;
  }

  distanceKmToLightYears(km: number) {
    const lightYearInKm: number = 9.461e12; // 1 light-year in kilometers
    return km / lightYearInKm;
  }

  initPage() {
    this.router.navigateByUrl('/home');
  }
}
