import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-produtoinfo',
  templateUrl: './produtoinfo.component.html',
  styleUrls: ['./produtoinfo.component.scss']
})
export class ProdutoinfoComponent implements OnInit {

  @Input() infos!:  any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.infos);
  }

}
