import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { NewsComponent } from './news/news.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ResumeComponent } from './resume/resume.component';
import { MediaComponent } from './media/media.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bio', component: BioComponent },
  { path: 'news', component: NewsComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'media', component: MediaComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
