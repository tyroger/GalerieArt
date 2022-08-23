import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PeinturesComponent } from './components/peintures/peintures.component';
import { ScrupturesComponent } from './components/scruptures/scruptures.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddArticleComponent } from './components/add-article/add-article.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"peintures",component:PeinturesComponent},
  {path:"scruptures",component:ScrupturesComponent},
  {path:"photos",component:PhotosComponent},
  {path:"contact",component:ContactComponent},
  {path:"add-article", component:AddArticleComponent},
  {path:"**", component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
