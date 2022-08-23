import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

articles! : Article[];

addArticle(){
  this.articles.push()
}

showArticles()
{
  return this.articles;
}

  constructor() { }

  ngOnInit(): void {

    this.showArticles();

    // pour le test
  this.articles = [
    {
      "id": 1,
      "title" : "totp",
      "artist" : "tata",
      "editionDate" : "12/22",
      "price" : 100,
      "imageUrl" : "https://cdn.pixabay.com/photo/2016/12/01/04/25/graffiti-1874452_960_720.jpg",
      "category" : "photo",
    },
    {
      "id": 2,
      "title" : "title2",
      "artist" : "artiste2",
      "editionDate" : "12/22",
      "price" : 100,
      "imageUrl" : "https://cdn.pixabay.com/photo/2019/09/05/05/28/eye-4453129_960_720.jpg",
      "category" : "photo",
    },
    {
      "id": 1,
      "title" : "totp",
      "artist" : "tata",
      "editionDate" : "12/22",
      "price" : 100,
      "imageUrl" : "https://cdn.pixabay.com/photo/2016/11/06/13/54/abstract-1802971_960_720.jpg",
      "category" : "photo",
    },
    {
      "id": 1,
      "title" : "totp",
      "artist" : "tata",
      "editionDate" : "12/22",
      "price" : 100,
      "imageUrl" : "image01",
      "category" : "photo",
    },
    {
      "id": 1,
      "title" : "totp",
      "artist" : "tata",
      "editionDate" : "12/22",
      "price" : 100,
      "imageUrl" : "image01",
      "category" : "photo",
    }
]
  }

  
}
