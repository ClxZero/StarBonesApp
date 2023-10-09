import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  search() {
    this.router.navigateByUrl('/search');
  }

  teamLink() {
    document.location.href = 'https://www.spaceappschallenge.org/2023/find-a-team/star-bones-technologies/';
  }
}
