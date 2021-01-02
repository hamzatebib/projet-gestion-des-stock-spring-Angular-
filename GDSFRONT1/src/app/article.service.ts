import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  urlarticles = 'http://127.0.0.1:8006/articles';
  article : any;

  constructor(private Http: HttpClient) { }
  listArticles() {
    return this.Http.get(this.urlarticles + '/list');
  }

  createArticle(myform) {
    this.article = {
      'label': myform.value.articleLabel,
      'price': myform.value.articlePrice,
      'picture': myform.value.articlePicture,
      'provider': {'id':myform.value.articleProvider}
      
    }
    return this.Http.post(this.urlarticles + '/add', this.article);
  }


  updateArticle(myObj) {
    return this.Http.put(this.urlarticles+ '/' + myObj['id'], myObj);
  }

  deleteArticle(myObj) {

    return this.Http.delete(this.urlarticles + '/' + myObj['id'])
  }

  getArticle(id) {

    return this.Http.get(this.urlarticles+ '/' + id)
  }
}
