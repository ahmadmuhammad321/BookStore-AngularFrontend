import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { CategoriesPageComponent } from './modules/categories-page/categories-page.component';
import { BlogPageComponent } from './modules/blog-page/blog-page.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SliderComponent,
    CategoriesComponent,
    AboutComponent,
    ReviewsComponent,
    BlogsComponent,
    ContactComponent,
    FooterComponent,
    AboutPageComponent,
    CategoriesPageComponent,
    BlogPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
