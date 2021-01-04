
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

import { BasicAuthHtppInterceptorServiceService } from './services/basic-auth-htpp-interceptor-service.service';


import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    AddProviderComponent,
    ListProviderComponent,
    UpdateProviderComponent,
    LoginComponent,
    LogoutComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    ListeArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHtppInterceptorServiceService,
      multi: true
      }
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
