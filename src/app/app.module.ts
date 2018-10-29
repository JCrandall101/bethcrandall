import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

import {SidebarModule} from 'primeng/sidebar';
import { BioComponent } from './bio/bio.component';
import { NewsComponent } from './news/news.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ResumeComponent } from './resume/resume.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    NewsComponent,
    TeachingComponent,
    ResumeComponent,
    MediaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
