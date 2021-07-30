import { Component, OnInit } from '@angular/core';

import { BannerComponent } from 'src/app/components/banner/banner.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    BannerComponent.url_img = 'assets/img/banner_site_1.png'
  }

}
