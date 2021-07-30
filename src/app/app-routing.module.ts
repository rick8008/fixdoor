import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pages
import { HomeComponent } from 'src/app/pages/home/home.component';
import { EmpresaComponent } from 'src/app/pages/empresa/empresa.component';
import {  BlogComponent} from 'src/app/pages/blog/blog.component';
import { PostComponent } from 'src/app/pages/post/post.component';
import { ProdutosComponent } from 'src/app/pages/produtos/produtos.component';
import { ProdutopgComponent } from 'src/app/pages/produtopg/produtopg.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto/:id', component: ProdutopgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
