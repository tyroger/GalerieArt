import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Article from 'src/app/models/article.model';


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm : FormGroup;

  articles : Article[] = [];



  constructor() { 
    this.articleForm = new FormGroup({
      id : new FormControl('', Validators.required),
      imageUrl : new FormControl('', Validators.required),
      title : new FormControl('', Validators.required),
      artist : new FormControl('', Validators.required),
      price : new FormControl('', Validators.required),
      category : new FormControl('', Validators.required),
      editionDate : new FormControl('', Validators.required)

    })
  }

  ngOnInit(): void {
  }

  addArticle(){
    this.articles.push(this.articleForm.value);
    alert("Your article has been added, thanks!");

    this.articleForm.reset();
  }

}
