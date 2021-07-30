import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var Email:any;
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor() { }
  nome = '';
  email = '';
  empresa = '';
  mensagem = '';
  ngOnInit(): void {

  }

}
