import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtorelacionado',
  templateUrl: './produtorelacionado.component.html',
  styleUrls: ['./produtorelacionado.component.scss']
})
export class ProdutorelacionadoComponent implements OnInit {
  obj = {
    img : '',
    nome : 'Nome do produto bem gande',
    id: '1'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
