import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-produtogaleria',
  templateUrl: './produtogaleria.component.html',
  styleUrls: ['./produtogaleria.component.scss']
})
export class ProdutogaleriaComponent implements OnInit {
  @Input() imgs!:  Array<{img: string}>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.imgs);
  }

}
