import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParametersService } from '../services/search-parameters.service';

@Component({
  selector: 'response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  constructor(private router: Router, public searchParams: SearchParametersService) { }

  ngOnInit() {
  }

  initPage() {
    this.router.navigateByUrl('/home')
  }
}
