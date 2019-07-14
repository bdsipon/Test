import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VideoDetailsComponent } from "./video-details/video-details.component";
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AppComponent, VideoDetailsComponent],
  imports: [BrowserModule, AppRoutingModule,
  RouterModule.forRoot([
    { path: '',component:VideoDetailsComponent},
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
