import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.slide(2);
   
  }


  public async slide(num: any){
    
    $('.slide-cliente').addClass('active')
    var inicio = num-1;
    var pool = $('.slide-cliente');
    var limite = pool.length;
    var connter = 1
    while (connter < 6 ) {
      if(inicio > limite ){
        inicio = 1;
      }
      var src = $('.img-'+inicio).attr('src');
      $('.img-show-'+connter).attr("src", src);
      console.log(inicio)
      inicio++;
      connter++;
    }
    
    await this.sleep(2000);
    this.slide(inicio);

  }

  public sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
