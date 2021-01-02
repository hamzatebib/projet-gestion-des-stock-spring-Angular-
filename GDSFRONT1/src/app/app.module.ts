import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProvierComponent } from './list-provier/list-provier.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    AddArticleComponent,
    AddProviderComponent,
    ListProvierComponent,
    ListeArticleComponent,
    UpdateArticleComponent,
    UpdateProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
