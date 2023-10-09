import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from '../services/search-parameters.service';
import { HttpClient } from '@angular/common/http';
import { HttpQuerysService } from '../services/http-querys.service';
import { Subscription } from 'rxjs';
import { ExoplanetsAPIObject } from '../models/exoApi.interface';
import { solarSystemObjects } from './solarsystem';

@Component({
  selector: 'search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  private subscription = new Subscription();
  exoplanetsList!: ExoplanetsAPIObject[];
  destinationsList!: any[];

  constructor(
    private http: HttpClient,
    private router: Router,
    public searchParams: SearchParametersService
  ) {}

  ngOnInit() {
    this.getExoplanetList();
  }

  selectDestiny(ev: any) {
    this.searchParams.destiny = this.destinationsList[ev.detail.value];
    this.searchParams.distance = this.destinationsList[ev.detail.value].st_dist;
  }

  getExoplanetList() {
    const query = new HttpQuerysService(this.http);
    // TODO: load more exoplanets
    const sub = query.getExoplanetList().subscribe((list) => {
      this.exoplanetsList = list.items;
      this.destinationsList = [...solarSystemObjects, ...this.exoplanetsList]
    });

    this.subscription.add(sub);
  }

  resolve() {
    this.router.navigateByUrl('/response');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
