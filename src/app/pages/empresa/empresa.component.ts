import { Component, OnInit } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner/banner.component';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    BannerComponent.url_img = 'assets/img/banner_site_2.png'
  }

}
