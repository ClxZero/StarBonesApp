import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from '../services/search-parameters.service';
import { HttpClient } from '@angular/common/http';
import { HttpQuerysService } from '../services/http-querys.service';
import { Subscription } from 'rxjs';
import { ExoplanetsAPIObject } from '../models/exoApi.interface';
import { solarSystemObjects } from './solarsystem';
import { AlertController } from '@ionic/angular';

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
    public searchParams: SearchParametersService,
    private alertController: AlertController
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
    const page = Math.floor(Math.random() * 5);
    const sub = query.getExoplanetList(page).subscribe((list) => {
      this.exoplanetsList = list.items;
      this.destinationsList = [...this.exoplanetsList, ...solarSystemObjects]
    });

    this.subscription.add(sub);
  }

  async resolve() {
    if ( this.searchParams.velocity > 100 ) {
      const alert = await this.alertController.create({
        subHeader: `You can't travel faster than light`,
        buttons: [
          {
            text: 'Back',
            role: 'confirm',
          },
        ],
      });

      return await alert.present();

    }

    return this.router.navigateByUrl('/response');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
