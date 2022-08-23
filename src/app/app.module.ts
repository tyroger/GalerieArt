import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PeinturesComponent } from './components/peintures/peintures.component';
import { ScrupturesComponent } from './components/scruptures/scruptures.component';
import { PhotosComponent } from './components/photos/photos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';

import { AddArticleComponent } from './components/add-article/add-article.component';

import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';


import {TabMenuModule} from 'primeng/tabmenu';
import {MenuModule} from 'primeng/menu';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavigationComponent,
    PeinturesComponent,
    ScrupturesComponent,
    PhotosComponent,
    NotFoundComponent,
    ContactComponent,
    AddArticleComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    TabMenuModule,
    ButtonModule,
    ImageModule,
    DividerModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
