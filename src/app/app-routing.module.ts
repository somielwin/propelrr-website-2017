import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogItemComponent } from './blog/blog-list/blog-item/blog-item.component';
import { CareerComponent } from './career/career.component';
import { CareerListComponent } from './career/career-list/career-list.component';
import { CareerDetailComponent } from './career/career-detail/career-detail.component';
import { CareerItemComponent } from './career/career-list/career-item/career-item.component';
import { HomeComponent } from './home/home.component';
import { homeScrollDirective } from './directives/home-scroll.directive';
import { InnerComponent } from './inner/inner.component';
import { FeaturedWorkComponent } from './featured-work/featured-work-list.component';
import { OurStrategyComponent } from './our-strategy/our-strategy.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { ResultListComponent } from './result/result-list/result-list.component';
import { ResultItemComponent } from './result/result-list/result-item/result-item.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: '404',
    component : PageNotFoundComponent
  },
  {
    path: 'product-service',
    component : ProductServiceComponent
  },
  {
    path: 'our-strategy',
    component : OurStrategyComponent
  },
  {
    path: 'featured-work',
    component : FeaturedWorkComponent
  },
  {
    path: 'inner',
    component : InnerComponent
  },
  {
    path: 'result',
    component : ResultComponent
  },
  {
    path: 'blog',
    component : BlogComponent,
    children : [
      {
        path: ':id',
        component : BlogDetailComponent
      }
    ]
  },
  {
    path: 'career',
    component : CareerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
