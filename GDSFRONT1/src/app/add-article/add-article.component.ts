import { ProviderService } from './../services/provider.service';
import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  article:any;
  valeur1 :any;
  providers: any;
  constructor(private service: ArticleService, private router : Router,private service2:ProviderService) { }

  ngOnInit() {
    this.service2.listProviders().subscribe(
      response => { 
        this.providers = response;
      }
    );
  }
  
  createArticle(myform) {
    myform.value.articleProvider=this.valeur1;
    this.service.createArticle(myform).subscribe(
      response => {
        console.log(response);
      }
    );
    
    this.router.navigate(['listearticle']);
  }
  changed(e){
     
    console.log( "salem ena :"+e.target.value);
    this.valeur1=e.target.value;
    console.log("hamza"+JSON.stringify(this.valeur1));}

}
