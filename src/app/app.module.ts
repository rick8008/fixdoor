import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { SobrenosComponent } from './components/sobrenos/sobrenos.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContatoComponent } from './components/contato/contato.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { PecasComponent } from './components/pecas/pecas.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { MvvComponent } from './components/mvv/mvv.component';
import { EmpresaTxtComponent } from './components/empresa-txt/empresa-txt.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { BlogheaderComponent } from './components/blogheader/blogheader.component';
import { NoticiaboxComponent } from './components/noticiabox/noticiabox.component';
import { PostComponent } from './pages/post/post.component';
import { ProdutofiltroComponent } from './components/produtofiltro/produtofiltro.component';
import { ProdutovitrineComponent } from './components/produtovitrine/produtovitrine.component';
import { ProdutovitrineobjComponent } from './components/produtovitrineobj/produtovitrineobj.component';
import { ProdutopgComponent } from './pages/produtopg/produtopg.component';
import { ProdutogaleriaComponent } from './components/produtogaleria/produtogaleria.component';
import { ProdutoinfoComponent } from './components/produtoinfo/produtoinfo.component';
import { ProdutorelacionadoComponent } from './components/produtorelacionado/produtorelacionado.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    SobrenosComponent,
    ClientesComponent,
    ContatoComponent,
    NewsletterComponent,
    FooterComponent,
    PecasComponent,
    EmpresaComponent,
    MvvComponent,
    EmpresaTxtComponent,
    BlogComponent,
    ProdutosComponent,
    BlogheaderComponent,
    NoticiaboxComponent,
    PostComponent,
    ProdutofiltroComponent,
    ProdutovitrineComponent,
    ProdutovitrineobjComponent,
    ProdutopgComponent,
    ProdutogaleriaComponent,
    ProdutoinfoComponent,
    ProdutorelacionadoComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
