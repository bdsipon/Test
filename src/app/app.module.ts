import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCommentsComponent } from './video-comments/video-comments.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoDetailsComponent,
    VideoListComponent,
    VideoCommentsComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
