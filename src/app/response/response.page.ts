import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.page.html',
  styleUrls: ['./response.page.scss'],
})
export class ResponsePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  initPage() {
    this.router.navigateByUrl('/home')
  }
}
