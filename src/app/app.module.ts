import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplecrouselComponent } from './samplecrousel/samplecrousel.component';
import { CustomCarouselModule } from 'projects/custom-carousel/src/public-api';
// import { CustomCarouselModule } from 'projects/custom-carousel/dist';

@NgModule({
  declarations: [
    AppComponent,
    SamplecrouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CustomCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
