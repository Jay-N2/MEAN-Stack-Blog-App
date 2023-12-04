import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { LatestArticlesComponent } from './latest-articles/latest-articles.component';
import { FeaturedArticlesComponent } from './featured-articles/featured-articles.component';
import { CategoriesComponent } from './categories/categories.component';




@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    LatestArticlesComponent,
    FeaturedArticlesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ], 
  exports:[LatestArticlesComponent]
})

export class ArticlesModule { }
