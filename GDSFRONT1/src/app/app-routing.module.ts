import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent ,  },
  { path: "addProvider", component: AddProviderComponent, },
  { path: "updateProvider/:id", component: UpdateProviderComponent ,},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, },
  { path: "listearticle", component: ListeArticleComponent ,  },
  { path: "addarticle", component: AddArticleComponent , },
  { path: "updateArticle/:id", component: UpdateArticleComponent , },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
