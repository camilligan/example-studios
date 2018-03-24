import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'navbar-component-example',
  templateUrl: './adventures.component.html',
  providers: [
  	NgbCarouselConfig,
  	HttpClient
  ]
})
export class AdventuresComponent implements OnInit {
  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 10000000;
    config.wrap = true;
    config.keyboard = true;
  }
  
  ngOnInit() { }
}
