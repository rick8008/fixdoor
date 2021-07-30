import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produtopg',
  templateUrl: './produtopg.component.html',
  styleUrls: ['./produtopg.component.scss']
})
export class ProdutopgComponent implements OnInit {
  id!: string;
  private sub: any;

  public produtoimg = [
    {img:'assets/img/fb_gray.png'},
    {img:'assets/img/fb_gray.png'},
    {img:'assets/img/fb_gray.png'}
  ]


  public produtoinfo = {
    nome:'Nome do produto bem grande',
    categoria:'Categoria',
    sobre:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat',
    info:[
      {lable:'Height (mm)',valor:'28'},
      {lable:'Profile shape',valor:'U-Profile'},
      {lable:'Panel thickness (mm)',valor:'40'},
      {lable:'Surface finish',valor:'Anodized'},
      {lable:'Length (mm)',valor:'6000'},
    ]
  }
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
       console.log(this.id);

    });
  }

}
