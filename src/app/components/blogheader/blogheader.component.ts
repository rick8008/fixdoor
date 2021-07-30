import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-blogheader',
  templateUrl: './blogheader.component.html',
  styleUrls: ['./blogheader.component.scss']
})
export class BlogheaderComponent implements OnInit {

  id!: number;
  private sub: any;

  obj1={
    titulo:"Título do post de blog",
    imagen:"assets/img/banner_site_produto.png",
    id:'Titulo_do_post_de_blog',
    gravata:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna tpat"
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(!isNaN(params['id']) && params['id'] != undefined){
        this.id = +params['id']; // (+) converts string 'id' to a number
      }else{
        this.id =1
      }
       
        console.log(this.id );
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
