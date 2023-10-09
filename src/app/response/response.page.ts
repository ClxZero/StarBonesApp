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
  background: string =
    'url(https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000132/GSFC_20171208_Archive_e000132~orig.jpg)';

  constructor(
    private router: Router,
    public searchParams: SearchParametersService
  ) {}

  ngOnInit() {
    if (!this.searchParams.destiny) {
      this.errorAnswer = 'No destination or speed selected';
    } else {
      this.searchParams.travelTime = this.calculateTimeTravelled(
        this.searchParams.distance,
        this.searchParams.velocity
      );
      this.timeDilation = this.calculateTimeDilation(
        this.searchParams.travelTime,
        this.searchParams.velocity
      );
      if (this.searchParams.destiny.image)
        this.background = `url(https://exoplanets.nasa.gov${this.searchParams.destiny.image})`;
      this.errorAnswer = '';
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

  moreInfo() {
    if (this.searchParams.destiny.url) {
      document.location.href = `https://exoplanets.nasa.gov${this.searchParams.destiny.url}`;
    } else {
      document.location.href = `https://science.nasa.gov/${this.searchParams.destiny.display_name}`;
    }
  }

  initPage() {
    this.router.navigateByUrl('/home');
  }
}
