import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-article',
  templateUrl: './liste-article.component.html',
  styleUrls: ['./liste-article.component.css']
})
export class ListeArticleComponent implements OnInit {
articles:any;
  constructor(private service: ArticleService,  private router: Router) { }

  ngOnInit() {
    this.service.listArticles().subscribe(
      response => {
        this.articles = response;
  });

}
deleteArticle(myObj) {
  //console.log(myObj);
  this.service.deleteArticle(myObj).subscribe(response => {
    console.log(response);
    this.refreshListArticles();
  })
}

refreshListArticles() {
  this.service.listArticles().subscribe(
    response => {
      this.articles = response;
    }
  );
}


updateArticle(myObj) {
  this.router.navigate(['updateArticle' + '/' + myObj['id']]);
}

}

