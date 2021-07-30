import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-produtovitrineobj',
  templateUrl: './produtovitrineobj.component.html',
  styleUrls: ['./produtovitrineobj.component.scss']
})
export class ProdutovitrineobjComponent implements OnInit {

  @Input() titulo!: string;
  @Input() id!: string;
  @Input() imagen!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
