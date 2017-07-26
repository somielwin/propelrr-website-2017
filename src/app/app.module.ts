import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogItemComponent,
    CareerComponent,
    CareerListComponent,
    CareerDetailComponent,
    CareerItemComponent,
    HomeComponent,
    homeScrollDirective,
    InnerComponent,
    ProductServiceComponent,
    FeaturedWorkComponent,
    OurStrategyComponent,
    HeaderComponent,
    ContactComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'Propelrr'}),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
