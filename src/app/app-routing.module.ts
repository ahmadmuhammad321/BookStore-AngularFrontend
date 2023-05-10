import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutPageComponent } from './modules/about-page/about-page.component';
import { BlogPageComponent } from './modules/blog-page/blog-page.component';
import { CategoriesPageComponent } from './modules/categories-page/categories-page.component';
import { ContactPageComponent } from './modules/contact-page/contact-page.component';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'home', component: MainComponent},
  {path: 'category', component: CategoriesPageComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'contact', component: ContactPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
