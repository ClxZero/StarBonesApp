import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from '../services/search-parameters.service';

@Component({
  selector: 'search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private router: Router, public searchParams: SearchParametersService) { }

  ngOnInit() {
  }

  resolve() {
    this.router.navigateByUrl('/response')
  }
}
