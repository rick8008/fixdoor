import { Component, OnInit } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner/banner.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    BannerComponent.url_img = 'assets/img/banner_site_1.png'
  }

}
