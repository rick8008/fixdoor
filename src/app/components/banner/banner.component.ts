import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  
  constructor() { }
  
  static  url_img ='';

  ngOnInit(): void {
  }

  get staticUrlArray() {
    return BannerComponent.url_img;
  }
}
