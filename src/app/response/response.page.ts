import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from '../services/search-parameters.service';

@Component({
  selector: 'response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {
  errorAnswer = 'Loading...';
  timeDilation!: number;

  constructor(
    private router: Router,
    public searchParams: SearchParametersService
  ) {}

  ngOnInit() {
    if (this.searchParams.destiny?.st_dist && this.searchParams.velocity) {
      this.searchParams.travelTime = this.calculateTimeTravelled(
        this.searchParams.destiny.st_dist,
        this.searchParams.velocity
      );
      this.timeDilation = this.calculateTimeDilation(
        this.searchParams.travelTime,
        this.searchParams.velocity
      );
      this.errorAnswer = '';
    } else {
      this.errorAnswer = 'Missing Data';
    }
  }

  /**
   * Calculate time it took to travel, keep the metrics consistent,
   * this function doesnt discriminate between measure types
   * @param distance
   * @param speed as a percentage of the speed of light
   * @returns travelTime
   */
  calculateTimeTravelled(distance: number, speed: number): number {
    const speedAsPercentageOfLightspeed = speed / 100;

    return distance / speedAsPercentageOfLightspeed;
  }

  /**
   * Calculate time dilation based on
   * @param timeTraveled in years
   * @param velocity as a percentage of the speed of light
   */
  calculateTimeDilation(timeTraveled: number, velocity: number): number {
    // speed of light km/s
    const c = 299792458;

    // Convert velocity percentage to fraction of the speed of light
    const v = (velocity * c) / 100;

    // Calculate time dilation using the equation
    const timeDilated =
      timeTraveled / Math.sqrt(1 - Math.pow(v, 2) / Math.pow(c, 2));

    return timeDilated;
  }

  velocityKmPerSecondToPercentageOfLightspeed(kmPerSecond: number) {
    const c = 299792458; // Speed of light in km/s
    const v = (kmPerSecond * 100) / c; // Convert to percentage
    return v;
  }

  kmHrTokmSec(kmPerHour: number): number {
    return kmPerHour / 3600;
  }

  initPage() {
    this.router.navigateByUrl('/home');
  }
}
