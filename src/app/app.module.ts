import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomCrouselv2Module } from 'projects/custom-crouselv2/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CrouselModule } from './crousel/crousel.module';
import { SamplecrouselComponent } from './samplecrousel/samplecrousel.component';

@NgModule({
  declarations: [AppComponent, SamplecrouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // CrouselModule
    CustomCrouselv2Module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
