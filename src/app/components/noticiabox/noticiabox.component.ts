import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-noticiabox',
  templateUrl: './noticiabox.component.html',
  styleUrls: ['./noticiabox.component.scss']
})
export class NoticiaboxComponent implements OnInit {

  @Input() titulo!: string;
  @Input() id!: string;
  @Input() imagen!: string;
  @Input() gravata!: string;
  constructor() { }

  ngOnInit(): void {
    console.log('asd',this.titulo,this.imagen,this.gravata)
  }

}
