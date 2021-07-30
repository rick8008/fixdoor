import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-produtovitrine',
  templateUrl: './produtovitrine.component.html',
  styleUrls: ['./produtovitrine.component.scss']
})
export class ProdutovitrineComponent implements OnInit {

  ativo = 0;

  categorias= [
    { titulo :'Todos os Produtos',
      id:0,
      subcategorias:[]
    },
    { titulo :'Portas Seccionais',
      id:1,
      subcategorias:[
        { titulo :'Roldanas',
          id:1_1
        },
        { titulo :'Molas',
          id:1_2
        },
        { titulo :'Enroladores de Cabos e seus componentes',
          id:1_3
        },
        { titulo :'Borrachas',
          id:1_4
        }
      ]
    },
    { titulo :'Portas Rápidas',
      id:2,
      subcategorias:[
        { titulo :'Roldanas',
          id:2_1
        },
        { titulo :'Molas',
          id:2_2
        },
        { titulo :'Enroladores de Cabos e seus componentes',
          id:2_3
        },
        { titulo :'Borrachas',
          id:2_4
        }
      ]
    },
    { titulo :'Portal de Selamento',
      id:3,
      subcategorias:[
        { titulo :'Roldanas',
          id:3_1
        },
        { titulo :'Molas',
          id:3_2
        },
        { titulo :'Enroladores de Cabos e seus componentes',
          id:3_3
        },
        { titulo :'Borrachas',
          id:3_4
        }
      ]
    },
    { titulo :'Soluções para Portas',
      id:4,
      subcategorias:[
        { titulo :'Roldanas',
          id:4_1
        },
        { titulo :'Molas',
          id:4_2
        },
        { titulo :'Enroladores de Cabos e seus componentes',
          id:4_3
        },
        { titulo :'Borrachas',
          id:4_4
        }
      ]
    },
  ];

  obj = {
    img : '',
    nome : 'Nome do produto bem gande',
    id: '1'
  }
  constructor() { }

  ngOnInit(): void {
    $('.categoria-0').addClass('active');
  }

  public ativar(num : number){
    this.ativo = num;
    $('.active').removeClass('active');
    $('.categoria-'+num).addClass('active');
    
  }

}
