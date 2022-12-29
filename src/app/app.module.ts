import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomCarouselModule } from 'projects/custom-carousel/dist';
// import { CustomCarouselModule } from 'projects/custom-carousel/dist/public-api';
// import { CustomCarouselModule } from 'projects/custom-carousel/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CrouselModule } from './crousel/crousel.module';
import { SamplecrouselComponent } from './samplecrousel/samplecrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    // CrouselComponent,
    SamplecrouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CustomCarouselModule
    // CrouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
