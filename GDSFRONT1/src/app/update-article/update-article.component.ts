import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  id;
   label;
   price;
  provider;
   articleToUpdate;


  constructor(private service: ArticleService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');  
      } 
    );

    this. articleToUpdate = this.service.getArticle(this.id).subscribe(
      response => {
        //console.log(response);
        this.label = response["label"];
        this.price = response["price"];
        this.provider = response["provider"];
   
      }
    );

   // this.initFormUpdateProvider(myform);
  }


  updateArticle() { 
    
    this.articleToUpdate = {
      'label': this.label,
      'price': this.price,
      'provider': this.provider,
      'id': this.id
    }

   

    this.service.updateArticle(this.articleToUpdate).subscribe(
      response => {
        console.log(response); 
      }
    );

    this.router.navigate(['listearticle']);
  }


}
